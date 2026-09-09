const footerGroups = [
    {
        title: 'Browse',
        links: [
            { label: 'Book Catalog', href: '#catalog' },
            { label: 'Subjects / Categories', href: '#subjects' },
            { label: 'E-Resources', href: '#e-resources' },
        ],
    },
    {
        title: 'Library',
        links: [
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Hours', href: '#hours' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { label: 'Contact Us', href: '#contact' },
            { label: 'Help', href: '#help' },
        ],
    },
];

export function PublicFooter() {
    return (
        <footer className="bg-[#0b2038] text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#1e324a] bg-[#0f2942]">
                                <span className="text-xs font-semibold text-slate-400">
                                    LOGO
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white">
                                    Mary Our Help
                                </span>
                                <span className="text-[11px] font-semibold tracking-tight text-[#f59e0b]">
                                    Technical Institute for Women (Cebu) Inc.
                                </span>
                            </div>
                        </div>
                        <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
                            (Salesian Sisters of St. John Bosco) — the library
                            and Online Public Access Catalog for students,
                            trainers, and staff.
                        </p>
                    </div>

                    {/* Link columns */}
                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h4 className="mb-3 text-xs font-bold tracking-widest text-white uppercase">
                                {group.title}
                            </h4>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-xs text-slate-400 transition-colors hover:text-[#f59e0b]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#1e324a] pt-6 sm:flex-row">
                    <p className="text-[11px] text-slate-500">
                        &copy; {new Date().getFullYear()} Mary Our Help
                        Technical Institute for Women (Cebu) Inc.
                    </p>
                    <p className="text-[11px] text-slate-500">
                        Library Online Public Access Catalog
                    </p>
                </div>
            </div>
        </footer>
    );
}
