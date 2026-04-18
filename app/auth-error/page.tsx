export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(8,8,16)] text-white">
      <h1 className="text-4xl font-bold mb-4">Sign In Error</h1>
      <p className="mb-6 text-lg text-muted-foreground max-w-xl text-center">
        Sorry, something went wrong during sign in. Please try again or contact support if the problem persists.
      </p>
      <a href="/register" className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-colors font-semibold">Back to Sign In</a>
    </div>
  )
}
