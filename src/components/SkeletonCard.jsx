const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-3">
      <div className="w-28 h-32 bg-gray-200 rounded" />
      <div className="w-20 h-4 bg-gray-200 rounded" />
    </div>
  );
};

export default SkeletonCard;
