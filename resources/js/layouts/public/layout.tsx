import { PublicFooter } from '@/components/public-footer';
import { PublicNavbar } from '@/components/public-navbar';
import type { PublicLayoutProps } from '@/types';

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-white font-inter">
            <PublicNavbar />
            <main className="flex-1 overflow-x-hidden">{children}</main>
            <PublicFooter />
        </div>
    );
}
