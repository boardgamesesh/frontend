import { redirect } from "next/navigation";

export default async function Game({ params }: { params: { gameId: string } }) {
  redirect(`game/${params.gameId}/preparing`);
}
