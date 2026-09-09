const resources = [
    {
        title: 'Books & Manuals',
        desc: 'TESDA-aligned training manuals, textbooks and general education titles.',
    },
    {
        title: 'Periodicals',
        desc: 'Journals, newspapers and magazines updated weekly. Including local Cebu titles.',
    },
    {
        title: 'Thesis & Research',
        desc: 'Alumni academic papers, thesis, and institutional research.',
    },
    {
        title: 'E-Resources',
        desc: 'Digital audio, research papers, and online databases.',
    },
];

export function ResourcesSection() {
    return (
        <section className="bg-white px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <h4 className="mb-1 text-[18px] font-semibold tracking-widest text-[#09254B] uppercase">
                        Resources
                    </h4>
                    <h2 className="text-2xl font-extrabold text-[#09254B] sm:text-3xl">
                        What can you find in our collections
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {resources.map((resource) => (
                        <div
                            key={resource.title}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded bg-[#fff8e7]">
                                <svg
                                    className="h-4 w-4 text-[#d97706]"
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
                            <h3 className="mb-2 text-sm font-bold text-[#0b2038]">
                                {resource.title}
                            </h3>
                            <p className="text-[11px] leading-relaxed text-slate-500">
                                {resource.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
