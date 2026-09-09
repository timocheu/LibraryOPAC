import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const browseItems = [
    { label: 'Book Catalog', href: '#catalog' },
    { label: 'Subjects / Categories', href: '#subjects' },
    { label: 'E-Resources', href: '#e-resources' },
];

const mobileNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Browse Catalog', href: '#catalog' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

const desktopNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export function PublicNavbar() {
    return (
        <header className="w-full border-b border-gray-200 bg-white font-inter">
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

                        {/* Typography Image / Text Placeholder */}
                        <div className="flex flex-row justify-center">
                            <img
                                src="images\MaryOurHelptypography.png"
                                alt="Mary Our Help"
                                className="hidden h-8 w-auto object-contain sm:block"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />

                            <div className="flex flex-col items-start justify-center pl-2">
                                {/* Fallback Text / Subtitle */}
                                <span className="text-xl font-bold text-[#1a365d] sm:hidden">
                                    Mary Our Help
                                </span>
                                <span className="text-[11px] font-semibold tracking-tight text-[#1d4ed8] sm:text-xs">
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
                            href="#home"
                            className="border-b-2 border-[#1d4ed8] pb-1 font-semibold text-[#1d4ed8] transition-colors"
                        >
                            Home
                        </a>

                        {desktopNavItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="transition-colors hover:text-[#1d4ed8]"
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Browse Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="gap-1 p-0 font-medium text-slate-700 hover:text-[#1d4ed8]"
                                >
                                    <span>Browse</span>
                                    <ChevronDown className="size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-48">
                                {browseItems.map((item) => (
                                    <DropdownMenuItem
                                        key={item.label}
                                        className="text-xs text-gray-700"
                                    >
                                        <a href={item.href} className="w-full">
                                            {item.label}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                                <div className="flex flex-col gap-3 pt-2">
                                    {mobileNavItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="text-sm text-gray-700"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
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
