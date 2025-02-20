import { Link } from '@inertiajs/react';
import {
    BookUser,
    FlaskConical,
    Gift,
    IdCard,
    Microscope,
    NotebookPen,
    TestTubeDiagonal,
} from 'lucide-react';

const features = [
    {
        icon: IdCard,
        title: 'Magang/PKL',
        description:
            'Program Praktek Lapangan serta kesempatan untuk mengembangkan keterampilan dan jaringan profesional.',
        color: 'bg-blue-500',
    },
    {
        icon: Microscope,
        title: 'Penelitian',
        description:
            'Peluang bagi akademisi, peneliti, dan industri perikanan untuk berkolaborasi dalam penelitian inovatif di bidang akuakultur.',
    },
    {
        icon: BookUser,
        title: 'Kunjungan Edukatif',
        description:
            'Kesempatan bagi pelajar, akademisi, dan masyarakat umum untuk kunjungan edukatif seputar dunia perikanan dan akuakultur.',
    },
    {
        icon: FlaskConical,
        title: 'Uji Laboratorium',
        description:
            'Menyediakan layanan uji laboratorium dengan standar terbaik untuk memastikan kualitas dan keamanan produk perikanan Anda.',
    },
    {
        icon: NotebookPen,
        title: 'Bimbingan Teknis',
        description:
            'Menawarkan pelatihan dan bimbingan teknis (Bimtek) bagi pembudidaya, akademisi, dan pelaku usaha perikanan untuk meningkatkan keterampilan di bidang akuakultur. ',
    },
    {
        icon: Gift,
        title: 'Bantuan & Hibah',
        description:
            'Program bantuan dan hibah bagi pembudidaya, kelompok usaha, dan pelaku industri perikanan untuk mendukung pengembangan akuakultur yang lebih produktif dan berdaya saing.',
    },
];

const Services = () => {
    return (
        <div className="flex items-center justify-center py-4">
            <div>
                {/* Title */}
                {/* <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
                        Layanan
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        Stay in the know with insights from industry experts.
                    </p>
                </div> */}
                {/* End Title */}

                <div className="mx-auto grid max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <Link
                            href="#"
                            key={feature.title}
                            className="group flex flex-col rounded-xl border bg-white/80 px-5 py-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] transition duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-black/70 sm:border-none"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted transition duration-300 group-hover:bg-blue-100">
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
    );
};

export default Services;
