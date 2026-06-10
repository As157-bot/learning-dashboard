export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-12 lg:col-span-2 rounded-3xl bg-zinc-900 animate-pulse h-96" />

        <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="col-span-full rounded-3xl bg-zinc-900 animate-pulse h-40" />

          <div className="rounded-3xl bg-zinc-900 animate-pulse h-56" />
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-56" />
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-56" />

          <div className="col-span-full rounded-3xl bg-zinc-900 animate-pulse h-40" />

        </div>

      </div>
    </main>
  );
}