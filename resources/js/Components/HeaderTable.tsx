import { router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderTabelProps {
    buttonLabel: string;
    url: string;
}

export default function HeaderTabel({ buttonLabel, url }: HeaderTabelProps) {
    const [query, setQuery] = useState('');

    const search = () => {
        router.get(route(`${url}.index`), { search: query }, { replace: true });
    };

    return (
        <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
                <div className="flex items-center">
                    <div className="sr-only">Search</div>
                    <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Pencarian"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    search();
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                <Button
                    type="button"
                    className="rounded-lg"
                    onClick={() => router.get(route(`${url}.create`))}
                >
                    <Plus className="h-3 w-3" />
                    <span>{buttonLabel}</span>
                </Button>
            </div>
        </div>
    );
}
