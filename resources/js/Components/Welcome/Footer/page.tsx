import { Separator } from '@/Components/ui/separator';
import { Link } from '@inertiajs/react';
import {
    DribbbleIcon,
    GithubIcon,
    TwitchIcon,
    TwitterIcon,
} from 'lucide-react';

const Footer = () => {
    return (
        <div className="flex flex-col">
            <footer>
                <div className="mx-auto max-w-screen-xl">
                    <Separator />
                    <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
                        {/* Copyright */}
                        <span className="text-muted-foreground">
                            &copy; {new Date().getFullYear()}{' '}
                            <Link href="/" target="_blank">
                                SIPUTTERI
                            </Link>
                            . All rights reserved.
                        </span>

                        <div className="flex items-center gap-5 text-muted-foreground">
                            <Link href="#" target="_blank">
                                <TwitterIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <DribbbleIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <TwitchIcon className="h-5 w-5" />
                            </Link>
                            <Link href="#" target="_blank">
                                <GithubIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
