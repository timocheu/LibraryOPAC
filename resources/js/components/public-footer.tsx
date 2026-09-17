import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

export function PublicFooter() {
    return (
        <div className="w-full bg-[linear-gradient(180deg,#FFFFFF_0%,#D7E5F3_100%)] font-inter text-slate-700">
            {/* FOOTER CONTENT */}
            <footer className="mx-auto max-w-6xl px-4 pb-6 pt-12">
                {/* LOGO & CONTACT BUTTON */}
                <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-center">
                    {/* Logo Brand */}
                    <div className="flex items-center gap-3">
                        {/* Replace /logo.png with your actual logo image src */}
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-blue-900/20 bg-white p-0.5 shadow-sm">
                            <img
                                src="images/maryourhelplogo.png"
                                alt="Mary Our Help Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg leading-tight font-bold text-slate-800">
                                Mary Our Help
                            </h2>
                            <p className="text-xs font-medium text-slate-500">
                                Technical Institute for Women (Cebu) Inc
                            </p>
                            <p className="text-xs font-medium text-slate-400">
                                Online Public Access Catalog (OPAC)
                            </p>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 cursor-pointer">
                        <Mail className="h-4 w-4 text-slate-800" />
                        <span>Contact us</span>
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                    </button>
                </div>

                {/* NAVIGATION LINKS & INFO GRID */}
                <div className="grid grid-cols-2 gap-8 py-10 text-xs text-slate-600 md:grid-cols-4">
                    {/* Col 1: Explore */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-slate-900">
                            Explore
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Search Catalog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    About the Library
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Library Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Sign in
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 2: Resources */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-slate-900">
                            Resources
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Books & Manuals
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Digital Collections
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Thesis & Research
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    E-Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Periodicals
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: About us */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-slate-900">
                            About us
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Our Vision
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Our History
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-blue-900"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: School Library */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-slate-900">
                            School Library
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-800" />
                                <span>
                                    Km. 17 Tunghaan, Minglanilla Cebu,
                                    Philippines 6046
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-slate-800" />
                                <span>+63 947-413-8124 | +63 906-321-9413</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-slate-800" />
                                <a
                                    href="mailto:info@maryourhelp-cebu.edu.ph"
                                    className="text-slate-700 hover:underline"
                                >
                                    info@maryourhelp-cebu.edu.ph
                                </a>
                            </li>
                            <li className="pt-2 text-slate-500">
                                Official Website:{' '}
                                <a
                                    href="https://maryourhelp-cebu.edu.ph"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium text-slate-700 hover:underline"
                                >
                                    maryourhelp-cebu.edu.ph
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT BAR */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-[10px] text-slate-500 md:flex-row">
                    <p>
                        © 2026 Mary Our Help Technical Institute for Women
                        (Cebu) Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:underline">
                            Terms of use
                        </a>
                        <a href="#" className="hover:underline">
                            Sites Map
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}