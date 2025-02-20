import { Button } from '@/Components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/Components/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { taskSchema, TaskType } from '@/lib/schemas/taskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Edit({ task }: { task: TaskType }) {
    const { toast } = useToast();

    const form = useForm<TaskType>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: task.title,
            description: task.description,
            status: task.status,
        },
    });

    const toastSuccess = () => {
        toast({
            title: 'Task berhasil diedit!',
            description: `Anda dapat melihat dan mengelola Task di bagian 'Daftar Task Management'.`,
            className: 'bg-[#E1F9F0] border-l-4 border-[#34D399] rounded-[4px]',
            action: (
                <div className="rounded-sm bg-[#34D399] p-[4px] text-white">
                    <Check className="h-3 w-3" />
                </div>
            ),
        });
    };

    const onSubmit: SubmitHandler<TaskType> = (data) => {
        router.put(
            route('tasks.update', task.id),
            { ...data },
            {
                onSuccess: () => {
                    toastSuccess();
                    form.reset();
                },
                onError: (errors) => {
                    console.error(errors);
                },
            },
        );
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Task
                </h2>
            }
        >
            <Head title="Pengajuan Uji Laboratorium" />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden border bg-white shadow-sm sm:rounded-lg">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="grid gap-4 px-4 py-4 sm:grid-cols-2 sm:px-5"
                            >
                                {/* Name */}
                                <div className="col-span-2 sm:col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Title{' '}
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-[4px] border border-gray-300 px-3 py-2.5 text-sm text-gray-900"
                                                        placeholder="Masukkan judul"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>{' '}
                                {/* Status */}
                                <div className="col-span-2 sm:col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Status{' '}
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        value={field.value}
                                                    >
                                                        <SelectTrigger className="h-[42px] w-full rounded-[4px] border border-gray-300 py-2.5 text-gray-800">
                                                            <SelectValue placeholder="Pilih status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="pending">
                                                                    Pending
                                                                </SelectItem>
                                                                <SelectItem value="in-progress">
                                                                    In Progress
                                                                </SelectItem>
                                                                <SelectItem value="completed">
                                                                    Completed
                                                                </SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* Note */}
                                <div className="col-span-2">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Deskripsi{' '}
                                                    <span className="text-red-600">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className="block w-full rounded-[4px] border border-gray-300 px-3 py-2.5 text-sm text-gray-900"
                                                        placeholder="Masukkan deskripsi"
                                                        rows={3}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* Next Button */}
                                <div className="col-span-2">
                                    <Button type="submit">Simpan</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
