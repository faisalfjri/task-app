import { Badge } from '@/Components/ui/badge';
import Services from '@/Components/Welcome/Services/page';
import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLDivElement, object>((_, ref) => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 hidden bg-cover bg-center sm:block"
                style={{
                    backgroundImage:
                        "url('https://ik.imagekit.io/faisalfjri/Gi7v_zGa0AAJJjZ.jpeg?updatedAt=1738839108036')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-50 sm:bg-black sm:bg-opacity-50" />

            {/* Content */}
            <div className="relative z-10 sm:mt-48">
                <div className="mx-auto max-w-[85rem] px-6 py-10 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-2xl text-center">
                        <Badge className="rounded-full border-none bg-gradient-to-l from-blue-600 to-violet-500 px-4 py-1">
                            SIPUTTERI
                        </Badge>
                        <div className="mt-5 max-w-2xl" ref={ref}>
                            <h1 className="block text-4xl font-semibold text-gray-700 dark:text-neutral-200 sm:text-gray-200 md:text-5xl lg:text-6xl">
                                Sistem Pelayanan Publik Terintegrasi
                            </h1>
                        </div>
                        {/* End Title */}
                        <div className="my-5 max-w-3xl">
                            <p className="text-lg dark:text-neutral-400 sm:text-gray-300">
                                Mewujudkan Pelayanan Publik yang Terintegrasi,
                                Inovatif, dan Berkualitas untuk Kemajuan
                                Akuakultur dan Perikanan Berkelanjutan.
                            </p>
                        </div>
                    </div>
                    <Services />
                </div>
            </div>
        </div>
    );
});

// Set display name to resolve ESLint warning
Hero.displayName = 'Hero';

export default Hero;
