const Table = ({ columns, data }) => {
  return (
    <div className="w-full overflow-hidden z-0">
      <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <table className="min-w-full border-collapse">
          <thead className="bg-white text-black">
            <tr>
              {columns?.map((col, index) => (
                <th
                  key={index}
                  className="px-2 py-1 font-semibold whitespace-nowrap text-lg capitalize"
                >
                  {col?.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y z-0">
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 hover:text-black ">
                {columns?.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-sm z-0 md:text-base font-semibold text-center whitespace-nowrap"
                  >
                    {col?.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
