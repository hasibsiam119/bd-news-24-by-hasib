export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      {/* Animated Logo/Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute h-24 w-24 rounded-full border-4 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin" />
        
        {/* Middle rotating ring (reverse) */}
        <div
          className="absolute h-16 w-16 rounded-full border-4 border-transparent border-b-pink-500 border-l-blue-500 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        />
        
        {/* Inner pulsing dot */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-pulse shadow-lg shadow-purple-500/50" />
      </div>

      {/* Loading text */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Loading...
        </h2>
        
        {/* Bouncing dots */}
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}