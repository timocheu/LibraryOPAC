import AboutImage from '@/public/images/maryourhelpherosection2.png';

export function AboutSection() {
    return (
        <section className="bg-[#f8f9fa] px-6 py-20 lg:px-8 mb-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="max-w-xl">
                    <h4 className="mb-2 text-xl font-bold tracking-wider text-[#FFAB20] uppercase">
                        About the library
                    </h4>
                    
                    <div className="mb-5 mt-2 h-[3px] w-10 bg-[#09254B]"></div>

                    <h2 className="mb-6 text-3xl leading-tight font-extrabold text-[#09254B] sm:text-4xl">
                        A learning hub run <br className="hidden sm:block" />
                        by the Salesian Sisters.
                    </h2>
                    
                    <div className="mb-6 mt-6 h-[3px] w-24 bg-[#09254B]"></div>

                    <div className="mb-8 space-y-4 text-sm leading-relaxed text-[#09254B]">
                        <p>
                            The library serves the students, trainers, and staff
                            of Mary Our Help Technical Institute for Women. Its
                            collections is built around the institute's
                            technical-vocational programs and complemented by
                            general education, values formation and Filipina
                            holdings.
                        </p>
                        <p>
                            Use the Online Public Access Catalog to check what
                            the library holds, where a material is shelved, and
                            whether a copy is available before you visit the
                            reading room.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-[#0b2038] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#153457]">
                        Learn more about the library
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="6"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 shadow-xl">
                    {/* Library Interior Image Placeholder */}
                    <img
                        src="images/maryourhelpherosection2.png"
                        alt="Inside the library"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
            
                </div>
            </div>
        </section>
    );
}
