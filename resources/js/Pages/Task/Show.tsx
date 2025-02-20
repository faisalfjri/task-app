import { TaskType } from '@/lib/schemas/taskSchema';
import { Head } from '@inertiajs/react';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import Descriptions from '@/Components/Descriptions';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('id');

export default function Show({ task }: { task: TaskType }) {
    const taskItems = [
        { label: 'Title', value: task.title },
        { label: 'Description', value: task.description },
        { label: 'Status', value: capitalizeFirstLetter(task.status) },
        {
            label: 'Created At',
            value: dayjs(task.created_at).format('DD MMMM YYYY'),
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-lg font-semibold leading-tight text-gray-800">
                    Detail Task
                </h2>
            }
        >
            <Head title="Pengajuan Task" />
            <div className="sm:12 py-6">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <div className="space-y-5 px-4">
                        <div className="mb-4 flex items-center justify-between rounded-lg border bg-white px-6 py-4">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href={route('dashboard')}
                                        >
                                            Dashboard
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href={route('tasks.index')}
                                        >
                                            Daftar Task
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Detail</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        <div className="mt-2">
                            <Descriptions items={taskItems} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
