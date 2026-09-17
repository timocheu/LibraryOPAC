import { LibraryBig, Newspaper, LucideFileSearch, Laptop  } from 'lucide-react';


const resources = [
    {
        title: 'Books & Manuals',
        desc: 'TESDA-aligned training manuals, textbooks and general education titles.',
        icon: LibraryBig,
        color: '#09254B',
    },
    {
        title: 'Periodicals',
        desc: 'Journals, newspapers and magazines updated weekly. Including local Cebu titles.',
        icon: Newspaper,
        color: '#09254B',
    },
    {
        title: 'Thesis & Research',
        desc: 'Alumni academic papers, thesis, and institutional research.',
        icon: LucideFileSearch,
        color: '#09254B',   
    },
    {
        title: 'E-Resources',
        desc: 'Digital audio, research papers, and online databases.',
        icon: Laptop,
        color: '#09254B',
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
                            className="rounded-4xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded bg-[#FC9D00]/20">
                                {resource.icon && (
                                    <resource.icon className="h-5 w-5 color-[{resource.color}]" />
                                )}
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
