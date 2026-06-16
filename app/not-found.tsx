export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-zinc-500">This page rolled a critical fail.</p>
      <a href="/" className="text-sm underline">
        Back to safety
      </a>
    </div>
  );
}