import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FlaskConical, IdCard } from 'lucide-react';

export default function Dashboard() {
    const features = [
        {
            title: 'Uji Laboratorium',
            link: '/uji-lab',
            icon: FlaskConical,
            description:
                'Menyediakan layanan uji laboratorium dengan standar terbaik untuk memastikan kualitas dan keamanan produk perikanan Anda.',
        },
        {
            title: 'Magang/PKL',
            link: '#',
            icon: IdCard,
            description:
                'Program Praktek Lapangan serta kesempatan untuk mengembangkan keterampilan dan jaringan profesional.',
            color: 'bg-blue-500',
        },
    ];
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-lg font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid gap-4 px-4 sm:grid-cols-2 sm:px-0">
                        {features.map((feature, index) => (
                            <Link
                                key={index}
                                href={feature.link}
                                className="group flex flex-col rounded-lg border bg-white px-5 py-6 shadow-sm transition duration-300 hover:border-gray-300 hover:bg-gray-50 hover:text-black/70"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted transition duration-300 group-hover:bg-gray-200">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <span className="text-lg font-bold tracking-tight">
                                    {feature.title}
                                </span>
                                <p className="mt-1 text-[15px] text-foreground/80">
                                    {feature.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
