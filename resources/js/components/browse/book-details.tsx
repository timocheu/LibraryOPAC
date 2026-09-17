import { useEffect } from 'react';
import { Hash, MapPin, X } from 'lucide-react';

export type BookHolding = {
    accessionNo: string;
    location: string;
    shelf: string;
    available: boolean;
};

export type BookDetailsData = {
    title: string;
    author: string;
    material: string;
    availability: string;
    location: string;
    shelf: string;
    callNo: string;
    description: string;
    publicationYear: string;
    language: string;
    publisher: string;
    edition: string;
    isbn: string;
    program: string;
    pages: string;
    subjects: string[];
    holdings: BookHolding[];
};

type BookDetailModalProps = {
    isOpen: boolean;
    onClose: () => void;
    book: BookDetailsData;
};

export function BookDetailModal({ isOpen, onClose, book }: BookDetailModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        /* MODAL OVERLAY BACKDROP */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* MODAL CONTAINER */}
            <div
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl scrollbar-hide animate-in overflow-y-auto rounded-3xl bg-white shadow-2xl fade-in zoom-in-95 duration-200"
            >
                {/* CLOSE BUTTON */}
                <div className="flex justify-end p-4 pb-0">
                    <button
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 cursor-pointer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* MODAL BODY */}
                <div className="space-y-6 p-6 pt-0 md:p-8">
                    {/* HEADER SECTION (Book Overview) */}
                    <div className="flex flex-col gap-6 sm:flex-row">
                        {/* Book Cover Placeholder */}
                        <div className="h-48 w-full shrink-0 rounded-xl bg-[#0A2246] shadow-md sm:w-36"></div>

                        {/* Book Info */}
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                                        {book.material}
                                    </span>
                                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-xs font-bold text-emerald-700">
                                        3 • Available
                                    </span>
                                </div>

                                <h2 className="text-xl leading-snug font-extrabold text-slate-900">
                                    {book.title}
                                </h2>
                                <p className="mt-1 text-xs font-medium text-slate-400">
                                    {book.author}
                                </p>

                                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                        {book.location}
                                    </span>
                                    <span>•</span>
                                    <span>Shelf {book.shelf}</span>
                                </div>

                                <div className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
                                    <Hash className="h-3.5 w-3.5 text-slate-400" />
                                    <span>Call no. {book.callNo}</span>
                                </div>

                                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-500">
                                    {book.description}
                                </p>
                            </div>

                            {/* Action Button */}
                            <div className="mt-4 flex justify-end">
                                <button className="cursor-pointer rounded-full bg-amber-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-md transition hover:bg-amber-600">
                                    Reserve this material
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 1: MATERIALS DETAILS */}
                    <div>
                        <h3 className="mb-2 text-xs font-bold text-slate-900">
                            Materials Details
                        </h3>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Material Type
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.material}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Publication Year
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.publicationYear}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Language
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.language}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Publisher
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.publisher}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Edition
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.edition}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    ISBN
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.isbn}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Program
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.program}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Pages
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.pages}
                                </p>
                            </div>

                            {/* Subjects Tags */}
                            <div className="col-span-2">
                                <p className="mb-1.5 text-[10px] font-medium text-slate-400">
                                    Subjects
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {book.subjects.map((subject) => (
                                        <span
                                            key={subject}
                                            className="rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold text-slate-950"
                                        >
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: HOLDINGS INFORMATION */}
                    <div>
                        <h3 className="mb-2 text-xs font-bold text-slate-900">
                            Holdings Information
                        </h3>
                        <div className="grid grid-cols-3 gap-x-4 gap-y-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Accession No.
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.holdings[0]?.accessionNo}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Call Number
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.callNo}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Location
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.location}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Shelf No.
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.shelf}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Copies
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    {book.holdings.length}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] font-medium text-slate-400">
                                    Borrowable
                                </p>
                                <p className="text-xs font-bold text-slate-800">
                                    Yes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: STATUS LIST */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-xs font-bold text-slate-900">
                                Status List
                            </h3>
                            <span className="text-[10px] font-medium text-slate-400">
                                {book.availability.toLowerCase()} copies available
                            </span>
                        </div>

                        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                            {book.holdings.map((holding, index) => (
                                <div
                                    key={holding.accessionNo}
                                    className={
                                        index === book.holdings.length - 1
                                            ? 'flex items-center justify-between'
                                            : 'flex items-center justify-between border-b border-slate-200/60 pb-3 last:border-0 last:pb-0'
                                    }
                                >
                                    <div>
                                        <p className="text-xs font-bold text-slate-800">
                                            {holding.accessionNo}
                                        </p>
                                        <p className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-400">
                                            <MapPin className="h-3 w-3 text-slate-400" />
                                            {holding.location} • Shelf {holding.shelf}
                                        </p>
                                    </div>
                                    {holding.available ? (
                                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-[10px] font-bold text-emerald-700">
                                            • Available
                                        </span>
                                    ) : (
                                        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-0.5 text-[10px] font-bold text-red-600">
                                            • Unavailable
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}