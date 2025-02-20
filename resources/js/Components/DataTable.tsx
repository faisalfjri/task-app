import { PaginatedResponse } from '@/lib/types/paginateType';
import Paginate from './Paginate';

export interface Column<T> {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface DataTableProps<T> {
    data: PaginatedResponse<T>;
    columns: Column<T>[];
}

const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="border-y bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key as string}
                                    scope="col"
                                    className="whitespace-nowrap px-6 py-3"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.length > 0 ? (
                            data.data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    {columns.map((col) => (
                                        <td
                                            key={col.key as string}
                                            className="px-6 py-4"
                                        >
                                            {col.render
                                                ? col.render(
                                                      item[col.key],
                                                      item,
                                                  )
                                                : String(item[col.key] ?? '')}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr className="border-b dark:border-gray-700 dark:bg-gray-800">
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-8 text-center"
                                >
                                    Tidak ada data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <nav
                className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
                aria-label="Table navigation"
            >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span className="mx-2 font-semibold text-gray-900 dark:text-white">
                        {data.from}-{data.to}
                    </span>
                    of
                    <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                        {data.total}
                    </span>
                </span>
                <Paginate paginates={data} />
            </nav>
        </>
    );
};

export default DataTable;
