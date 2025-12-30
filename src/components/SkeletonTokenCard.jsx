const SkeletonTokenCard = () => {
  return (
    <div className="w-[94%] mx-auto md:w-full rounded-xl shadow bg-white py-2 animate-pulse">
      <div className="w-[85%] mx-auto">
        <div className="flex items-center gap-x-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        <div className="h-6 w-32 bg-gray-200 rounded mt-3" />
        <div className="h-4 w-16 bg-gray-200 rounded mt-2" />
      </div>
    </div>
  );
};

export default SkeletonTokenCard;
