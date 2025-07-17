export function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      className="w-full bg-gray-200 h-2 rounded-full overflow-hidden shadow-inner dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
