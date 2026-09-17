import { Hash, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export type BrowseResultStatus = 'available' | 'unavailable';

export type BrowseResultCardProps = {
    title: string;
    author: string;
    material: string;
    status: BrowseResultStatus;
    availability?: string;
    location: string;
    shelf: string;
    callNo: string;
    description: string;
    onDetails?: () => void;
};

export function BrowseResultCard({
    title,
    author,
    material,
    status,
    availability,
    location,
    shelf,
    callNo,
    description,
    onDetails,
}: BrowseResultCardProps) {
    const isAvailable = status === 'available';

    return (
        <Card className="flex cursor-pointer flex-col gap-5 rounded-2xl border-slate-100 p-5 shadow-sm transition hover:shadow-md sm:flex-row" onClick={onDetails}>
            <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-lg bg-[#0A2246] text-white/20 sm:w-28">
                <span className="text-xs font-semibold">COVER</span>
            </div>

            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <Badge className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                        {material}
                    </Badge>
                    {isAvailable ? (
                        <Badge className="rounded-full border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                            {availability ?? 'Available'}
                        </Badge>
                    ) : (
                        <Badge className="rounded-full border-red-200 bg-red-50 px-2.5 py-0.5 text-[10px] font-bold text-red-600">
                            Unavailable
                        </Badge>
                    )}
                </div>

                <div>
                    <h3 className="cursor-pointer text-base font-bold text-slate-900 hover:text-blue-900">
                        {title}
                    </h3>
                    <p className="text-xs text-slate-400">{author}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                        <MapPin className="size-3.5 text-slate-400" />
                        {location}
                    </span>
                    <span>•</span>
                    <span>Shelf {shelf}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <Hash className="size-3.5 text-slate-400" />
                        Call no. {callNo}
                    </span>
                </div>

                <p className="line-clamp-2 pt-1 text-xs leading-relaxed text-slate-500">
                    {description}
                </p>
            </div>
        </Card>
    );
}
