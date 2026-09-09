export function HoursSection() {
    return (
        <section id="hours" className="bg-white px-6 pb-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="min-h-[200px] rounded-3xl bg-[#0b2038] p-8 shadow-lg sm:p-12">
                    <div className="mb-4 flex items-center gap-2 text-[#f59e0b]">
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-xs font-bold tracking-widest uppercase">
                            Library Hours
                        </h3>
                    </div>
                    {/* Space reserved for actual time schedule data */}
                    <div className="text-sm text-slate-300">
                        <p>Schedule details goes here...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
