import { useState } from 'react';

export function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <section className="relative flex min-h-[500px] w-full flex-col justify-center overflow-hidden pt-16 pb-32 font-inter">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/maryourhelpherosection.png')`,
                }}
            />

            {/* Blue Transparent Overlay */}
            <div className="absolute inset-0 bg-[#0b2038]/75" />

            {/* Hero Content Overlay */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl">
                    {/* Sub-header */}
                    <p className="mb-3 text-[10px] font-semibold tracking-widest text-[#f59e0b] uppercase sm:text-xs">
                        Mary Our Help Library
                    </p>

                    {/* Main Headline */}
                    <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Discover. Learn. <br />
                        <span className="text-[#f59e0b]">Inspire.</span>
                    </h1>

                    {/* Description */}
                    <p className="mb-8 max-w-lg text-xs leading-relaxed text-slate-200 sm:text-sm">
                        Search the Mary Our Help collection — print, digital and
                        audio-visual materials curated for every
                        technical-vocational and general education program.
                    </p>

                    {/* Pill-shaped Search Bar Group */}
                    <div className="flex max-w-xl flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
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
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Title, author, category, ISBN or call number..."
                                className="w-full rounded-full bg-white py-3.5 pr-16 pl-11 text-xs text-slate-800 placeholder-slate-400 shadow-lg focus:ring-2 focus:ring-[#f59e0b] focus:outline-none sm:text-sm"
                            />
                            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <kbd className="hidden rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 sm:inline-block">
                                    Ctrl + K
                                </kbd>
                            </span>
                        </div>

                        {/* Pill-shaped Search Button */}
                        <button className="rounded-full bg-[#FFAB20] px-8 py-3.5 text-sm font-bold text-[#15305B] shadow-lg transition-colors hover:bg-[#d97706]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive SVG Wave at the Bottom */}
            {/* Keeping the SVG ensures the wave doesn't stretch or distort on ultra-wide screens. */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
                <svg 
                className="relative block w-full h-16 sm:h-24 md:h-32 lg:h-36" 
                viewBox="0 0 1440 120" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                {/* 
                    Gradient Definition based on image_f29f85.png 
                    x1="0%" and x2="100%" makes it flow horizontally from left to right.
                */}
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFAB20" />
                    <stop offset="100%" stopColor="#F7C87A" />
                    </linearGradient>
                </defs>

                {/* White Bottom Fill */}
                <path 
                    d="M0,50 C350,130 850,-10 1440,50 L1440,120 L0,120 Z" 
                    fill="#ffffff" 
                />
                
                {/* 
                    Uniform Gradient Band 
                    Referencing the defined gradient ID in the stroke attribute.
                */}
                <path 
                    d="M0,50 C350,130 850,-10 1440,50" 
                    fill="none" 
                    stroke="url(#waveGradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                />
                </svg>
            </div>
        </section>
    );
}
