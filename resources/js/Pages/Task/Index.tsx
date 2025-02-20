import DataTable, { Column } from '@/Components/DataTable';
import HeaderTabel from '@/Components/HeaderTable';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TaskType } from '@/lib/schemas/taskSchema';
import { PaginatedResponse } from '@/lib/types/paginateType';
import { Head, router } from '@inertiajs/react';
import dayjs from 'dayjs';

export default function Index({
    tasks,
}: {
    tasks: PaginatedResponse<TaskType>;
}) {
    const statusColors = {
        'in-progress': 'bg-blue-100 text-blue-800',
        pending: 'bg-yellow-100 text-yellow-800',
        completed: 'bg-green-100 text-green-800',
    };

    const columns: Column<TaskType>[] = [
        {
            key: 'created_at',
            label: 'Tanggal Dibuat',
            render: (value) => dayjs(String(value)).format('DD MMM YYYY'),
        },
        {
            key: 'title',
            label: 'Title',
            render: (value) => <div>{value ? String(value) : '-'}</div>,
        },
        {
            key: 'description',
            label: 'Description',
            render: (value) => (
                <div className="w-[420px]">
                    <div>{value ? String(value) : '-'}</div>
                </div>
            ),
        },
        {
            key: 'status',
            label: 'Status',
            render: (value) => (
                <div className="whitespace-nowrap">
                    <Badge
                        variant="outline"
                        className={`border-none text-xs font-medium ${statusColors[value as keyof typeof statusColors]}`}
                    >
                        {value}
                    </Badge>
                </div>
            ),
        },
        {
            key: 'id',
            label: 'Action',
            render: (id) => (
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() =>
                            router.get(route('tasks.show', Number(id)))
                        }
                    >
                        Detail
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            router.get(route('tasks.edit', Number(id)))
                        }
                    >
                        Edit
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() =>
                            router.delete(route('tasks.destroy', Number(id)))
                        }
                    >
                        Detail
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-lg font-semibold leading-tight text-gray-800">
                    Daftar Task Management
                </h2>
            }
        >
            <Head title="Pengajuan Uji Laboratorium" />
            <div className="sm:12 py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <HeaderTabel buttonLabel="Tambah Task" url="tasks" />

                        <DataTable data={tasks} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
