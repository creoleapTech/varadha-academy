export default function LoadingSkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-3 w-5/6"></div>
      <div className="h-10 bg-gray-200 rounded mt-4"></div>
    </div>
  )
}
