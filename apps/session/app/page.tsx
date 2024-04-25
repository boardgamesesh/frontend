"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  DicesIcon,
  Info,
  Loader2,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const [picker, setPicker] = useState<string | null>();
  const [seshNo, setSeshNo] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get data from local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const players = localStorage.getItem("players");
      const picker = localStorage.getItem("picker");
      const seshNo = localStorage.getItem("seshNo");

      if (players) {
        setPlayers(players.split(","));
      }

      if (picker) {
        setPicker(picker);
      }

      if (seshNo) {
        setSeshNo(parseInt(seshNo, 10));
      } else {
        localStorage.setItem("seshNo", "1");
      }
    }
  }, []);

  // Reset picker if there's less than two players
  useEffect(() => {
    if (players.length < 2) {
      setPicker(null);
      localStorage.removeItem("picker");
    }
  }, [players]);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomisePicker = () => {
    const picker = players[getRandomNumber(0, players.length - 1)];
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    localStorage.setItem("picker", picker);
    setPicker(picker);
  };

  const removePlayer = (players: string[], playerName: string) => {
    const index = players.indexOf(playerName);

    if (index > -1) {
      players.splice(index, 1);
    }

    localStorage.setItem("players", players.toString());

    return players;
  };

  const formSchema = z.object({
    playerName: z.string().min(1),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.resetField("playerName");

    setPlayers((prevState) => {
      const newPlayerArray = [...prevState, values.playerName];
      localStorage.setItem("players", newPlayerArray.toString());
      return newPlayerArray;
    });
  }

  const handleRemovePlayer = (playerName: string) => {
    const newPlayers = removePlayer(players, playerName);
    setPlayers([...newPlayers]);

    if (playerName === picker) {
      setPicker(null);
    }
  };

  const handleNewSesh = () => {
    const newSeshNo = seshNo + 1;

    setSeshNo(newSeshNo);
    localStorage.setItem("seshNo", newSeshNo.toString());
    setPicker(null);
    localStorage.removeItem("picker");
  };

  return (
    <main>
      <div className="container max-w-lg space-y-6">
        <header>
          <h1 className="font-bold mt-6 text-2xl flex gap-2 items-center">
            <Image src={Logo} alt="" className="h-6 w-6" />
            BoardGameSesh
          </h1>
        </header>
        <div className="flex-grow">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 border-b mb-6">
              <CardTitle>Sesh #{seshNo}</CardTitle>
              <Button
                onClick={() => handleNewSesh()}
                variant="outline"
                className="gap-1"
              >
                Next sesh <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="pb-6">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      Players ({players.length})
                    </h3>
                    <p className="text-sm">
                      Add at least 2 players to this session.
                    </p>
                  </div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full"
                    >
                      <FormField
                        control={form.control}
                        name="playerName"
                        render={({ field }) => (
                          <FormItem className="relative space-y-0">
                            <FormLabel className="absolute border-r p-2 mt-[5px] font-bold">
                              Name
                            </FormLabel>
                            <div className="flex gap-4">
                              <FormControl>
                                <Input
                                  type="text"
                                  className="pl-[4rem]"
                                  minLength={1}
                                  required
                                  {...field}
                                />
                              </FormControl>
                              <Button type="submit" className="gap-2 h-[40px]">
                                <Plus className="h-4 w-4" /> Add{" "}
                                <span className="sr-only">
                                  {field.value} to players
                                </span>
                              </Button>
                            </div>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  {players.length > 0 && (
                    <>
                      <Separator className="my-3" />
                      <ul className="grid gap-4">
                        {players.map((player) => (
                          <li
                            key={player}
                            className="flex justify-between items-center"
                          >
                            {player}
                            <Button
                              type="button"
                              size="icon"
                              variant="secondary"
                              className="text-xs h-8 w-8"
                              onClick={() => handleRemovePlayer(player)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Remove {player}</span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {players.length >= 2 && (
                <div aria-live="polite">
                  <Separator className="mb-6" />
                  <div className="space-y-1 my-4">
                    <h2 className="text-lg font-semibold">Game picker</h2>
                    <p className="text-sm">
                      Determine who gets to choose the game for the sesh!
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="flex gap-1"
                    onClick={() => randomisePicker()}
                    disabled={isLoading}
                    variant="outline"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" /> Randomising...
                      </>
                    ) : (
                      <>
                        <DicesIcon /> Randomise game picker
                      </>
                    )}
                  </Button>
                  {picker && !isLoading && (
                    <p className="mt-4">
                      <strong>{picker}</strong> will pick the game!
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
