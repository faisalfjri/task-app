import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/Components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';

interface NavMenuProps extends NavigationMenuProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    sections: {
        layanan: React.RefObject<HTMLElement>;
        articles: React.RefObject<HTMLElement>;
        faq: React.RefObject<HTMLElement>;
    };
}

export const NavMenu = (props: NavMenuProps) => {
    const { scrollToSection, sections } = props;

    return (
        <NavigationMenu {...props}>
            <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="#">Beranda</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <button
                            onClick={() => scrollToSection(sections.layanan)}
                        >
                            Layanan
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <button
                            onClick={() => scrollToSection(sections.articles)}
                        >
                            Artikel
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <button onClick={() => scrollToSection(sections.faq)}>
                            Faq
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};
