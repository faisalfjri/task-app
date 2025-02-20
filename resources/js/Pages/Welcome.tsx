import { Button } from '@/Components/ui/button';
import Articles from '@/Components/Welcome/Articles/page';
import FAQ from '@/Components/Welcome/faq/page';
import Footer from '@/Components/Welcome/Footer/page';
import Hero from '@/Components/Welcome/Hero/page';
import Logo from '@/Components/Welcome/Navbar/logo';
import { NavMenu } from '@/Components/Welcome/Navbar/nav-menu';
import { PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
import { useRef } from 'react';

export default function Welcome({ auth }: PageProps) {
    const layananRef = useRef<HTMLDivElement | null>(null);
    const articlesRef = useRef<HTMLElement | null>(null);
    const faqRef = useRef<HTMLElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <>
            <Head title="Welcome" />

            <div className="bg-gray-50 text-black/70 dark:bg-black dark:text-white/50">
                <nav className="h-16 border-b bg-background">
                    <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Logo className="flex h-7 text-gray-500 sm:h-8" />

                        {/* Desktop Menu */}
                        <NavMenu
                            scrollToSection={scrollToSection}
                            sections={{
                                layanan: layananRef,
                                articles: articlesRef,
                                faq: faqRef,
                            }}
                            className="hidden md:block"
                        />
                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Button
                                    onClick={() =>
                                        router.get(route('dashboard'))
                                    }
                                >
                                    Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        variant="outline"
                                        className=""
                                        onClick={() =>
                                            router.get(route('login'))
                                        }
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            router.get(route('register'))
                                        }
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                <Hero ref={layananRef} />

                <main className="mx-auto max-w-6xl">
                    <section ref={articlesRef}>
                        <Articles />
                    </section>
                    <section ref={faqRef}>
                        <FAQ />
                    </section>
                    <Footer />
                </main>
            </div>
        </>
    );
}
