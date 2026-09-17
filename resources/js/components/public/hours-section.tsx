import { Clock } from 'lucide-react';

export function HoursSection() {
    return (
        <div className="mx-auto max-w-6xl px-4 pt-5 mb-10">
            <div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-[2rem] bg-[#0A2246] p-8 text-white shadow-xl md:grid-cols-2 md:gap-16 md:p-12">
                {/* LIBRARY HOURS COLUMN */}
                <div>
                    <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-lg font-bold tracking-wider text-white uppercase">
                            LIBRARY HOURS
                        </h3>
                    </div>
                    {/* Orange bar indicator under title */}
                    <div className="mb-2 h-1 w-10 bg-amber-500"></div>
                    <p className="mb-6 text-xs text-slate-300">
                        We are open during the following schedule:
                    </p>

                    <div className="space-y-4">
                        {/* Row 1 */}
                        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-slate-800/80 p-2 text-slate-300">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-slate-200">
                                    Monday to Friday
                                </span>
                            </div>
                            <span className="font-semibold text-amber-400">
                                7:30 AM - 5:00 PM
                            </span>
                        </div>

                        {/* Row 2 */}
                        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-slate-800/80 p-2 text-slate-300">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-slate-200">
                                    Saturday
                                </span>
                            </div>
                            <span className="font-semibold text-amber-400">
                                8:00 AM - 12:00 NN
                            </span>
                        </div>

                        {/* Row 3 */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-slate-800/80 p-2 text-slate-300">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-slate-200">
                                    Sunday & Holidays
                                </span>
                            </div>
                            <span className="font-semibold text-amber-400">
                                Closed
                            </span>
                        </div>
                    </div>
                </div>

                {/* LIBRARY ACCESS COLUMN */}
                <div className="flex flex-col justify-between md:border-l md:border-slate-700/60 md:pl-12">
                    <div>
                        <h3 className="mb-1 text-lg font-bold tracking-wider text-white uppercase">
                            LIBRARY ACCESS
                        </h3>
                        {/* Orange bar indicator under title */}
                        <div className="mb-6 h-1 w-10 bg-amber-500"></div>

                        <p className="mb-6 text-sm leading-relaxed text-slate-300">
                            Library access is limited to currently enrolled
                            students and active faculty and staff of Mary Our
                            Help Technical Institute for Women (Cebu) Inc.
                        </p>
                    </div>

                    <p className="text-xs italic text-slate-400">
                        The library is closed on official holidays and school
                        breaks.
                    </p>
                </div>
            </div>
        </div>
    );
}