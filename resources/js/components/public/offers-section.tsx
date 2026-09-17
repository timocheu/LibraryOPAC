import { Library, BookOpenText } from 'lucide-react';

const lightCards = [
    {
        title: 'About the library',
        desc: 'Sections, holdings and readings spaces for students and trainers.',
        linkText: 'Know the library',
        icon: Library,
    },
    {
        title: 'Library Services',
        desc: 'Borrowing rules, reservations, research help and digital access.',
        linkText: 'See services',
        icon: BookOpenText,
    },
];

export function OffersSection() {
    return (
        <section className="bg-white px-6 pt-10 pb-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-[#0b2038] sm:text-3xl">
                        Everything the library offers
                    </h2>
                    <a
                        href="#browse"
                        className="flex items-center gap-1 text-xs font-semibold text-[#0b2038] transition-colors hover:text-[#f59e0b] sm:text-sm"
                    >
                        Browse all materials
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Dark Card */}
                    <div className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-[#0b2038] p-8 text-white">
                        <div>
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e324a]">
                                <svg
                                    className="h-5 w-5 text-[#f59e0b]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-lg font-bold">
                                Online Public Access Catalog
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-300">
                                Search titles, authors, subjects and call
                                numbers, then check copy-level status before you
                                walk in.
                            </p>
                        </div>
                        <a
                            href="#opac"
                            className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#f59e0b] hover:underline"
                        >
                            Search the catalog
                            <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 17L17 7M17 7H8M17 7V16"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Light Cards */}
                    {lightCards.map((card) => {
                        // Assign the icon to a capitalized variable so React knows it's a component
                        const Icon = card.icon; 
                        
                        return (
                            <div
                                key={card.title}
                                className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                            >
                                <div>
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff8e7]">
                                        {/* Render the Lucide Icon directly */}
                                        <Icon className="h-5 w-5 text-[#09254B]" strokeWidth={2} />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-[#0b2038]">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-slate-500">
                                        {card.desc}
                                    </p>
                                </div>
                                <a
                                    href={`#${card.title.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#0b2038] transition-colors hover:text-[#f59e0b]"
                                >
                                    {card.linkText}
                                    <svg
                                        className="h-3.5 w-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}