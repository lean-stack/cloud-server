import { CloudIcon } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="container mx-auto pt-32">
      <h1 className="flex items-end text-indigo-700">
        <CloudIcon className="h-9" />
        <span className="ml-2 mr-6  text-3xl font-semibold">Rube Servidor</span>
        <small className="text-xl text-indigo-400">A Lean Cloud Server</small>
      </h1>
    </div>
  );
}

export default HomePage;
