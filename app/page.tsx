import { CloudIcon  } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto pt-32">
      <h1 className="flex flex-col gap-y-4 text-indigo-700 items-center">
        <div className="flex items-center justify-center">
          <CloudIcon className="h-12" />
          <span className="ml-2 text-3xl font-semibold">Nube Servidor</span>
        </div>
        <small className="text-2xl text-indigo-400">A Lean Cloud Server</small>
      </h1>
    </div>
    </main>
  )
}
