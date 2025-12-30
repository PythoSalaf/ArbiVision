const SkeletonTable = ({ rows = 5, columns = 5, showHeader = true }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 animate-pulse">
      <table className="w-full border-collapse">
        {showHeader && (
          <thead className="bg-gray-50">
            <tr>
              {Array.from({ length: columns }).map((_, i) => (
                <th key={i} className="px-4 py-3">
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
