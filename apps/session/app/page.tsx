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
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  CloudLightning,
  DicesIcon,
  Info,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Session() {
  const [players, setPlayers] = useState<string[]>([]);
  const [picker, setPicker] = useState<string | null>();
  const [seshNo, setSeshNo] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const players = localStorage.getItem("players");
      if (players) {
        setPlayers(players.split(","));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const picker = localStorage.getItem("picker");
      if (picker) {
        setPicker(picker);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seshNo = localStorage.getItem("seshNo");

      if (seshNo) {
        setSeshNo(parseInt(seshNo, 10));
      } else {
        localStorage.setItem("seshNo", "1");
      }
    }
  }, []);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomisePicker = () => {
    const picker = players[getRandomNumber(0, players.length - 1)];
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
    playerName: z.string(),
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
    <div className="container max-w-lg space-y-6">
      <header>
        <h1 className="font-bold mt-6 text-2xl flex gap-2 items-center">
          <Image src={Logo} alt="" className="h-6 w-6" />
          BoardGameSesh
        </h1>
      </header>
      <div className="flex-grow">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
            <CardTitle>Sesh #{seshNo}</CardTitle>
            <Button
              onClick={() => handleNewSesh()}
              variant="outline"
              className="gap-1"
            >
              Next sesh <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="border-t border-b py-6">
            <Tabs
              defaultValue={players.length === 0 ? "group" : "picker"}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="group">
                  Players ({players.length})
                </TabsTrigger>
                <TabsTrigger value="picker">Game picker</TabsTrigger>
              </TabsList>
              <TabsContent value="group">
                <>
                  <div className="space-y-3">
                    <div className="space-y-1 my-4">
                      <h2 className="text-lg font-semibold">Players</h2>
                      <p className="text-sm">
                        Add who's going to play in this session.
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
                                    {...field}
                                  />
                                </FormControl>
                                <Button
                                  type="submit"
                                  className="gap-2 h-[40px]"
                                >
                                  <Plus className="h-4 w-4" /> Add
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
                                <span className="sr-only">Remove</span>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </>
              </TabsContent>
              <TabsContent value="picker">
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
                >
                  <DicesIcon />
                  Randomise player
                </Button>
                <Separator className="my-3" />
                {players.length > 0 ? (
                  <p>{picker}</p>
                ) : (
                  <p className="text-sm bg-blue-100 p-2 rounded text-blue-700 flex gap-1 items-center font-medium">
                    <Info className="h-4 w-4" />
                    Add some players to get started!
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="bg-slate-100 rounded p-4 space-y-2">
        <h2 className="text-lg font-bold text-slate-600 flex gap-1 items-center">
          <Sparkles className="h-5 w-5" /> Need more power?
        </h2>
        <ul className="list-disc pl-5">
          <li>Multiple groups & sessions</li>
          <li>Cross-device sync</li>
          <li>Automations</li>
        </ul>
        <Link href="/going-pro" className="underline block">
          Find out more...
        </Link>
      </div>
    </div>
  );
}
