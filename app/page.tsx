import Balances from "@/components/balances";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Balances />
    </main>
  )
}
