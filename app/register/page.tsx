export default function ClosedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Registrations Closed
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Sorry, registrations are now closed because we’ve reached maximum capacity.
        </p>

        <a
          href="/"
          className="
            inline-block px-8 py-4 rounded-lg text-lg font-semibold
            bg-primary text-primary-foreground
            transition-all duration-300

            shadow-[0_0_15px_var(--color-ring)]
            hover:shadow-[0_0_30px_var(--color-ring)]
            hover:scale-105
          "
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}