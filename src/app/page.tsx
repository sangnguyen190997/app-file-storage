"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const session = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button>Hello World</Button>
    </main>
  );
}
