import { SlidersHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const materialTypes = [
    { id: 'book', label: 'Book', defaultChecked: true },
    { id: 'thesis', label: 'Thesis', defaultChecked: false },
    { id: 'eresource', label: 'E-Resource', defaultChecked: false },
    { id: 'journal', label: 'Journal', defaultChecked: false },
    { id: 'periodicals', label: 'Periodicals', defaultChecked: false },
];

const locations = [
    { id: 'general', label: 'General Circulation', defaultChecked: true },
    { id: 'reference', label: 'Reference Section', defaultChecked: false },
    { id: 'periodical', label: 'Periodical Section', defaultChecked: false },
];

type FilterCheckboxRow = {
    id: string;
    label: string;
    defaultChecked: boolean;
};

function FilterGroup({
    title,
    items,
}: {
    title: string;
    items: FilterCheckboxRow[];
}) {
    return (
        <div>
            <h4 className="mb-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                {title}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2.5">
                        <Checkbox
                            id={item.id}
                            defaultChecked={item.defaultChecked}
                            className="size-3.5 rounded border-slate-300 focus-visible:ring-0 data-[state=checked]:border-[#0A2246] data-[state=checked]:bg-[#0A2246] data-[state=checked]:text-white"
                        />
                        <Label
                            htmlFor={item.id}
                            className={`cursor-pointer text-xs ${
                                item.defaultChecked
                                    ? 'font-medium text-slate-800'
                                    : 'text-slate-600'
                            }`}
                        >
                            {item.label}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function BrowseFilterSidebar() {
    return (
        <aside className="md:col-span-1">
            <Card className="gap-0 rounded-2xl border-slate-100 p-5 shadow-sm">
                <div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <SlidersHorizontal className="size-4 text-slate-600" />
                    <h3 className="text-sm font-bold text-slate-800">
                        Refine results
                    </h3>
                </div>

                <div className="space-y-6">
                    <FilterGroup title="Material Type" items={materialTypes} />
                    <FilterGroup title="Location" items={locations} />
                </div>
            </Card>
        </aside>
    );
}
