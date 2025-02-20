import Logo from '@/Components/Welcome/Navbar/logo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 self-center font-medium"
                >
                    <Logo className="h-8 w-full fill-current text-gray-500" />
                </Link>
                {children}
            </div>
        </div>
        // <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
        //     <div>
        //         <Link
        //             href="/"
        //             className="flex items-center gap-2 self-center font-medium"
        //         >
        //             <Logo className="h-10 w-full fill-current text-gray-500" />
        //         </Link>
        //     </div>

        //     <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        //         {children}
        //     </div>
        // </div>
    );
}
