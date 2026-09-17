import { Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function BrowseHeroBanner() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <section className="w-full border-t-4 border-amber-500 bg-[#0A2246] px-6 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                <p className="mb-1 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    Online Public Access Catalog
                </p>
                <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                    Search the Library collection
                </h2>
                <p className="mb-6 text-xs text-slate-300 md:text-sm">
                    Find books, periodicals, thesis, e-resources and
                    instructional media available at the Mary Our Help library.
                </p>

                <div className="flex max-w-4xl items-center gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-400" />
                        <Input
                            type="text"
                            placeholder="Title, author, category, ISBN or call number..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-auto rounded-full border-0 bg-white py-3 pr-20 pl-11 text-xs text-slate-800 shadow-md placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-amber-400 md:text-sm"
                        />
                        <span className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 sm:inline-block">
                            Ctrl + K
                        </span>
                    </div>
                    <Button className="h-auto rounded-full bg-amber-500 px-8 py-3 text-xs font-bold text-slate-950 shadow-md hover:bg-amber-600 md:text-sm">
                        Search
                    </Button>
                </div>
            </div>
        </section>
    );
}
