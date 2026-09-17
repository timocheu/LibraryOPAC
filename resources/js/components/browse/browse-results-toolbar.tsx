import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const sortOptions = [
    'Relevance',
    'Title (A-Z)',
    'Year (newest)',
    'Year (oldest)',
] as const;

type SortOption = (typeof sortOptions)[number];

export function BrowseResultsToolbar() {
    const [sort, setSort] = useState<SortOption>('Relevance');

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800">
                    2 records found
                </span>
                <Badge className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {sort}
                </Badge>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="h-auto gap-1.5 rounded-full border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50"
                    >
                        <span>Sort</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuRadioGroup
                        value={sort}
                        onValueChange={(value) => setSort(value as SortOption)}
                    >
                        {sortOptions.map((option) => (
                            <DropdownMenuRadioItem
                                key={option}
                                value={option}
                                className="text-xs"
                            >
                                {option}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
