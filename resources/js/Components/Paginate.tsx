import { PaginatedResponse } from '@/lib/types/paginateType';
import { router } from '@inertiajs/react';

const Paginate = ({ paginates }: { paginates: PaginatedResponse<any> }) => {
    return (
        paginates.total > paginates.data.length && (
            <ul className="inline-flex items-stretch -space-x-px">
                {paginates.links.map((link, index) => {
                    return (
                        <li key={index} className="pl-2">
                            <button
                                aria-label={`paginate-${index}`}
                                type="button"
                                className={`${
                                    link.url === null
                                        ? 'cursor-default bg-gray-100 text-gray-300 hover:text-gray-300'
                                        : link.active
                                          ? 'cursor-default border-gray-900 bg-gray-900 text-white hover:bg-gray-900 hover:text-white'
                                          : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-700'
                                } whitespace-nowrap rounded-lg border px-3 py-1.5 text-sm leading-tight dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                onClick={() =>
                                    link.active
                                        ? {}
                                        : router.get(link.url ?? '')
                                }
                                disabled={!link.url}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            ></button>
                        </li>
                    );
                })}
            </ul>
        )
    );
};

export default Paginate;
