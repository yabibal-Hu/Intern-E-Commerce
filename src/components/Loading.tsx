export default function Loading() {
  return (<div className="flex flex-col items-center justify-center h-screen">

    <div className="flex gap-2">
      <div className="w-5 h-5 rounded-full animate-pulse bg-red-500"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-red-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-red-700"></div>
    </div>
  </div>
  );
}
