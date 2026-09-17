import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const pageItems: (number | '…')[] = [1, 2, 3, '…', 10];

export function BrowsePagination() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col items-center justify-center gap-4 pt-6 text-xs text-slate-600 sm:flex-row">
            <div className="flex items-center gap-1.5">
                <span className="mr-1 font-medium text-slate-400">Prev</span>

                {pageItems.map((item) =>
                    item === '…' ? (
                        <span key={item} className="px-1 text-slate-400">
                            {item}
                        </span>
                    ) : (
                        <Button
                            key={item}
                            onClick={() => setCurrentPage(item)}
                            className={cn(
                                'flex h-7 w-7 items-center justify-center rounded-md p-0 cursor-pointer',
                                item === currentPage
                                    ? 'bg-[#0A2246] text-white hover:bg-[#071731]'
                                    : 'border border-slate-200 bg-white font-medium text-slate-600 hover:bg-slate-100',
                            )}
                        >
                            {item}
                        </Button>
                    ),
                )}

                <span className="ml-1 cursor-pointer font-medium text-slate-700 hover:underline">
                    Next
                </span>
            </div>

            <div className="flex items-center gap-1.5 sm:ml-4">
                <span className="text-slate-400">Page</span>
                <Select
                    value={String(currentPage)}
                    onValueChange={(value) => setCurrentPage(Number(value))}
                >
                    <SelectTrigger className="h-auto gap-1 rounded border border-slate-200 bg-white px-2 py-0.5 text-xs">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from(
                            { length: 10 },
                            (_, index) => index + 1,
                        ).map((page) => (
                            <SelectItem key={page} value={String(page)}>
                                {page}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <span className="text-slate-400">of 10</span>
            </div>
        </div>
    );
}
