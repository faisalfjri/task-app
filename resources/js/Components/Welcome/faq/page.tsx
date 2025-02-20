import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/Components/ui/accordion';
const faq = [
    {
        question: 'Apa itu SIPUTTERI?',
        answer: 'SIPUTTERI (Sistem Pelayanan Publik Terintegrasi) adalah platform yang bertujuan untuk mewujudkan pelayanan publik yang terintegrasi, inovatif, dan berkualitas dalam mendukung kemajuan akuakultur dan perikanan berkelanjutan.',
    },
    {
        question: 'Bagaimana cara mengikuti program Magang/PKL?',
        answer: 'Anda dapat mendaftar program Magang/PKL dengan mengajukan permohonan ke Balai Perikanan Budidaya Air Payau Ujung Batee. Program ini memberikan kesempatan untuk mengembangkan keterampilan dan jaringan profesional di bidang perikanan.',
    },
    {
        question: 'Apa saja layanan penelitian yang tersedia?',
        answer: 'Kami menyediakan peluang bagi akademisi, peneliti, dan industri perikanan untuk berkolaborasi dalam penelitian inovatif di bidang akuakultur guna mendukung perkembangan sektor perikanan berkelanjutan.',
    },
    {
        question: 'Bagaimana cara melakukan kunjungan edukatif?',
        answer: 'Untuk melakukan kunjungan edukatif, silakan menghubungi pihak Balai Perikanan Budidaya Air Payau Ujung Batee. Kunjungan ini terbuka bagi pelajar, akademisi, dan masyarakat umum yang ingin memahami lebih dalam dunia perikanan dan akuakultur.',
    },
    {
        question: 'Layanan uji laboratorium apa yang tersedia?',
        answer: 'Kami menyediakan layanan uji laboratorium dengan standar terbaik untuk memastikan kualitas dan keamanan produk perikanan Anda. Untuk informasi lebih lanjut, silakan hubungi kami.',
    },
    {
        question: 'Apa saja yang termasuk dalam layanan Bimbingan Teknis?',
        answer: 'Kami menawarkan pelatihan dan bimbingan teknis (Bimtek) bagi pembudidaya, akademisi, dan pelaku usaha perikanan untuk meningkatkan keterampilan mereka di bidang akuakultur.',
    },
    {
        question: 'Bagaimana cara mendapatkan bantuan atau hibah?',
        answer: 'Program bantuan dan hibah tersedia bagi pembudidaya, kelompok usaha, dan pelaku industri perikanan. Untuk informasi lebih lanjut mengenai syarat dan proses pendaftaran, silakan menghubungi kami.',
    },
];

const FAQ = () => {
    return (
        <div className="mt-16 flex items-center justify-center px-6 py-12">
            <div className="flex flex-col items-start gap-x-12 gap-y-6 md:flex-row">
                <h2 className="text-4xl font-black !leading-[1.15] tracking-tight lg:text-5xl">
                    {/* Frequently Asked <br /> Questions */}
                    Pertanyaan yang Sering Diajukan
                </h2>

                <Accordion
                    type="single"
                    defaultValue="question-0"
                    className="max-w-xl"
                >
                    {faq.map(({ question, answer }, index) => (
                        <AccordionItem
                            key={question}
                            value={`question-${index}`}
                        >
                            <AccordionTrigger className="text-left text-lg">
                                {question}
                            </AccordionTrigger>
                            <AccordionContent>{answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
