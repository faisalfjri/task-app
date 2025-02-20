export default function Articles() {
    const articles = [
        {
            id: 1,
            title: 'IA Departemen Biologi FMIPA USK',
            desc: 'Silaturahmi dengan Departemen Biologi FMIPA USK. Dalam pertemuan yang berlangsung kedua belah pihak melaksanakan penandatanganan IA yang bertujuan untuk memperkuat kerja sama di bidang pendidikan, pelatihan serta pengembangan teknologi dan sumber daya manusia',
            image: 'https://ik.imagekit.io/faisalfjri/Gi_0-xTa4AIIC8k.jpeg?updatedAt=1738841160689',
        },
        {
            id: 2,
            title: 'Konsultasi penelitian',
            desc: 'Menerima kunjungan dari mahasiswa Program Studi Biologi Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Syiah Kuala (USK). Kunjungan tersebut dilakukan dengan tujuan konsultasi mengenai mikroalga untuk keperluan penelitian.',
            image: 'https://ik.imagekit.io/faisalfjri/Gihh2S1agAAKVWv.jpeg?updatedAt=1738841046578',
        },
        {
            id: 3,
            title: 'Kuliah Umum',
            desc: 'Bapak Manijo, mengadakan kegiatan kuliah umum yang dihadiri oleh seluruh mahasiswa dan mahasiswi yang sedang menjalani magang di BPBAP Ujung Batee. Kuliah umum ini dilaksanakan di Auditorium Malahayati dengan tema "Kebijakan Pembangunan Perikanan Budidaya.',
            image: 'https://ik.imagekit.io/faisalfjri/Ghx6M6xaAAAKmDN.jpeg?updatedAt=1738842064200',
        },
    ];

    return (
        <div className="rounded-none bg-white px-6 py-10 sm:rounded-2xl lg:px-8 lg:py-14">
            {/* Title */}
            <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                <h2
                    id="article"
                    className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight"
                >
                    Artikel
                </h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    Berita, informasi, dan wawasan terbaru tentang perikanan dan
                    akuakultur.
                </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <a
                        key={article.id}
                        className="group flex flex-col focus:outline-none"
                        href="#"
                    >
                        <div className="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
                            <img
                                className="absolute start-0 top-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                                src={article.image}
                                alt="Blog Image"
                            />
                            {/* <span className="absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-neutral-900">
                                Sponsored
                            </span> */}
                        </div>
                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                {article.title}
                            </h3>
                            <p className="mt-3 text-gray-800 dark:text-neutral-200">
                                {article.desc}
                            </p>
                            {/* <p className="mt-5 inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 group-hover:underline group-focus:underline dark:text-blue-500">
                                Read more
                                <svg
                                    className="size-4 shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p> */}
                        </div>
                    </a>
                ))}
            </div>
            {/* End Grid */}
        </div>
    );
}
