"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DicesIcon, Loader2, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  const [seshNo, setSeshNo] = useState<number>(1);
  const [players, setPlayers] = useState<string[]>([]);
  const [picker, setPicker] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [config, setConfig] = useState({ keepPlayers: false });

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
      localStorage.setItem("picker", picker);
      setPicker(picker);
    }, 1200);
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
    setPicker(null);
    localStorage.removeItem("picker");

    if (!config.keepPlayers) {
      setPlayers([]);
      localStorage.removeItem("players");
    }

    const newSeshNo = seshNo + 1;
    localStorage.setItem("seshNo", newSeshNo.toString());
  };

  return (
    <main>
      <div className="container max-w-lg py-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="font-bold text-xl flex gap-2 items-center">
            <Image src={Logo} alt="" className="h-6 w-6" />
            BGSesh
          </h1>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" tabIndex={1}>
                Start new sesh
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will delete your current sesh and start a new one.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="border rounded-lg p-4 flex justify-between items-center">
                <Label className=" grid gap-1" htmlFor="keepPlayers">
                  <span className="text-sm font-semibold">
                    Transfer existing players
                  </span>
                  <span className="text-xs text-gray-500">
                    Keep your current players for the next sesh.
                  </span>
                </Label>
                <Switch
                  id="keepPlayers"
                  checked={config.keepPlayers}
                  onCheckedChange={(event) => {
                    setConfig((prevState) => ({
                      ...prevState,
                      keepPlayers: event,
                    }));
                  }}
                />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleNewSesh()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </header>
        <Card className="relative">
          <CardHeader>
            <CardTitle>Sesh #{seshNo}</CardTitle>
            <CardDescription>
              Organise this session by adding players and a game picker
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 border-t pt-3">
            <h3 className="font-semibold">Players ({players.length})</h3>
            {!picker && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                              tabIndex={1}
                              {...field}
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            className="gap-2 h-[40px]"
                            tabIndex={2}
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only md:not-sr-only">Add</span>
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
            )}
            {players.length > 0 && (
              <div className="mt-3">
                <Separator className="my-3" />
                <ul className="grid gap-4">
                  {players.map((player) => (
                    <li
                      key={player}
                      className="flex justify-between items-center"
                    >
                      <span aria-atomic>
                        {player}
                        <span className="sr-only">Added</span>
                      </span>
                      {!picker && (
                        <Button
                          type="button"
                          size="icon"
                          variant="secondary"
                          className="text-xs h-8 w-8"
                          onClick={() => handleRemovePlayer(player)}
                          tabIndex={4}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only" aria-atomic>
                            Remove {player}
                          </span>
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <div aria-live="polite" aria-relevant="additions text">
            {players.length >= 2 && (
              <CardFooter className="sticky bottom-0 py-3 border-t bg-white rounded-b flex-col space-y-3">
                <>
                  {picker && !isLoading && (
                    <p>
                      <strong>{picker}</strong> will pick the game(s)!
                    </p>
                  )}
                  {!picker && (
                    <div className="relative">
                      <Button
                        size="sm"
                        className="flex gap-1 w-full"
                        onClick={() => randomisePicker()}
                        disabled={isLoading}
                        variant="outline"
                        tabIndex={3}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin" />
                          </>
                        ) : (
                          <>
                            <DicesIcon />
                          </>
                        )}
                        Randomly choose a game picker
                      </Button>
                      <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                      </span>
                    </div>
                  )}
                </>
              </CardFooter>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
