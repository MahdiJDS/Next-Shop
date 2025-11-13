'use client' 

import Container from "@/components/Conteiner";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {

  return (
    <Container>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-2xl font-bold text-red-600">Something went wrong 😢</h1>
        <p className="text-gray-500 mt-2">{error.message}</p>

        <button
          onClick={() => reset()}
          className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Try again
        </button>
      </div>
    </Container>
  );
}
