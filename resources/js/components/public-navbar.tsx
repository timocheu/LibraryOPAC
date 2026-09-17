import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const mobileNavItems = [
    { label: 'Home', href: '/', activeHref: '/' },
    { label: 'About', href: '#about', activeHref: null },
    { label: 'Browse Catalog', href: '/browse', activeHref: '/browse' },
    { label: 'Services', href: '#services', activeHref: null },
    { label: 'Contact', href: '#contact', activeHref: null },
];

const desktopNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export function PublicNavbar() {
    const { url } = usePage();

    const currentPath = url.split('?')[0];
    const isHomeActive = currentPath === '/';
    const isBrowseActive = currentPath === '/browse';

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Branding / Logo Section */}
                    <div className="flex items-center gap-3">
                        {/* Circular Logo Image Placeholder */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-gray-50">
                            <img
                                src="images/maryourhelplogo.png"
                                alt="Mary Our Help Logo"
                                className="h-full w-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>

                        {/* Brand Typography */}
                        <div className="flex flex-row items-center justify-center gap-2">
                            <span className="font-umbral text-2xl leading-none text-[#014098]">
                                Mary Our Help
                            </span>

                            <div className="flex flex-col items-start justify-center pt-1">
                                <span className="text-base font-bold tracking-tight text-[#1d4ed8] sm:text-xs">
                                    Technical Institute for Women (Cebu) Inc.
                                </span>
                                <span className="text-[9px] leading-none text-gray-500">
                                    (Salesian Sisters of St. John Bosco)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden items-center space-x-6 text-sm font-medium text-slate-700 md:flex">
                        <a
                            href={isHomeActive ? '#home' : '/'}
                            className={`group relative py-2 transition-colors ${
                                isHomeActive
                                    ? 'font-semibold text-[#FFAB20]'
                                    : 'hover:text-[#1d4ed8]'
                            }`}
                        >
                            Home
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 w-full origin-right transition-transform duration-300 group-hover:scale-x-100 ${
                                    isHomeActive
                                        ? 'scale-x-100 bg-[#FFAB20]'
                                        : 'scale-x-0 bg-[#1d4ed8]'
                                }`}
                            />
                        </a>

                        {desktopNavItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group relative py-2 transition-colors hover:text-[#1d4ed8]"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-[#1d4ed8] transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        ))}

                        {/* Browse Link */}
                        <Button
                            asChild
                            variant="ghost"
                            className={`group relative gap-1 py-2 font-medium transition-colors ${
                                isBrowseActive
                                    ? 'font-semibold text-[#FFAB20] hover:text-[#FFAB20]'
                                    : 'text-slate-700 hover:text-[#1d4ed8]'
                            }`}
                        >
                            <Link href="/browse">
                                <span>Browse</span>
                                <ChevronDown className="size-4" />
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-right bg-[#1d4ed8] transition-transform duration-300 group-hover:scale-x-100 ${
                                        isBrowseActive
                                            ? 'scale-x-100 bg-[#FFAB20]'
                                            : 'scale-x-0'
                                    }`}
                                />
                            </Link>
                        </Button>
                    </nav>

                    {/* Call-to-Action Buttons */}
                    <div className="hidden items-center space-x-3 md:flex">
                        <Button
                            variant="outline"
                            className="border-slate-300 text-sm text-slate-700"
                        >
                            Help
                        </Button>
                        <Button className="bg-[#0f2942] text-sm text-white shadow-sm hover:bg-[#163a5d]">
                            Sign In
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="p-2 text-gray-600 hover:text-gray-900"
                                >
                                    <Menu className="size-6" />
                                    <span className="sr-only">
                                        Toggle navigation menu
                                    </span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72 p-6">
                                <SheetHeader>
                                    <SheetTitle>Mary Our Help</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-1 pt-2">
                                    {mobileNavItems.map((item) => {
                                        const isActive =
                                            item.activeHref !== null &&
                                            currentPath === item.activeHref;

                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className={`group relative py-1.5 text-sm transition-colors ${
                                                    isActive
                                                        ? 'font-semibold text-[#FFAB20]'
                                                        : 'text-gray-700 hover:text-[#1d4ed8]'
                                                }`}
                                            >
                                                {item.label}
                                                <span
                                                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-right transition-transform duration-300 group-hover:scale-x-100 ${
                                                        isActive
                                                            ? 'scale-x-100 bg-[#FFAB20]'
                                                            : 'scale-x-0 bg-[#1d4ed8]'
                                                    }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                    <div className="flex flex-col gap-2 pt-2">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Help
                                        </Button>
                                        <Button className="w-full bg-[#0f2942] text-white hover:bg-[#163a5d]">
                                            Sign In
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
