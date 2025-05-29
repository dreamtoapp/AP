interface DataTableProps {
  headers: string[]
  data: string[][]
  highlightLastRow?: boolean
  totalRow?: string[]
  summaryRows?: string[][]
}

export default function DataTable({ headers, data, highlightLastRow, totalRow, summaryRows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 text-black">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-right font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors ${highlightLastRow && index === data.length - 1 ? "bg-blue-100 font-semibold" : ""
                }`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-right border-b border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          {totalRow && (
            <tr className="bg-blue-100 font-bold text-blue-900">
              {totalRow.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-right border-b border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          )}
          {summaryRows &&
            summaryRows.map((row, index) => (
              <tr key={`summary-${index}`} className="bg-blue-100 font-bold text-blue-900 w-full ">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-left border-b border-gray-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}
