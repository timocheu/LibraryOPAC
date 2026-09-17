import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { BookDetailModal, type BookDetailsData } from '@/components/browse/book-details';
import { BrowseFilterSidebar } from '@/components/browse/browse-filter-sidebar';
import { BrowseHeroBanner } from '@/components/browse/browse-hero-banner';
import { BrowsePagination } from '@/components/browse/browse-pagination';
import { BrowseResultCard } from '@/components/browse/browse-result-card';
import { BrowseResultsToolbar } from '@/components/browse/browse-results-toolbar';
import PublicLayout from '@/layouts/public/layout';

const sampleBook: BookDetailsData = {
    title: 'Professional Cooking for the Filipino Kitchen',
    author: 'Reyes, Amelia C. • Cebu Culinary Press, 2021',
    material: 'Book',
    availability: '3',
    location: 'General Circulation',
    shelf: 'R-11',
    callNo: 'TX652 .R49 2021',
    description: 'A practical foundation in kitchen operations, mise en place, and Filipino menu costing designed for TESDA-aligned training programs.',
    publicationYear: '2021',
    language: 'English',
    publisher: 'Cebu Culinary Press',
    edition: '1st Edition',
    isbn: '978-621-8123-45-6',
    program: 'Food and Beverage Services',
    pages: '485',
    subjects: ['Cooking', 'Filipino Cuisine', 'Kitchen Operations'],
    holdings: [
        { accessionNo: 'MOH-2021-0451-01', location: 'General Circulation', shelf: 'R-11', available: true },
        { accessionNo: 'MOH-2021-0451-02', location: 'General Circulation', shelf: 'R-11', available: true },
        { accessionNo: 'MOH-2021-0451-03', location: 'General Circulation', shelf: 'R-11', available: true },
        { accessionNo: 'MOH-2021-0451-04', location: 'General Circulation', shelf: 'R-11', available: false },
    ],
};

export default function Browse() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <PublicLayout>
            <Head title="Browse Catalog" />

            <BrowseHeroBanner />

            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-4">
                <BrowseFilterSidebar />

                <main className="space-y-6 md:col-span-3">
                    <BrowseResultsToolbar />

                    <BrowseResultCard
                        title="Professional Cooking for the Filipino Kitchen"
                        author="Reyes, Amelia C. • Cebu Culinary Press, 2021"
                        material="Book"
                        status="available"
                        availability="4 • Available"
                        location="General Circulation"
                        shelf="R-11"
                        callNo="TX652 .R49 2021"
                        description="A practical foundation in kitchen operations, mise en place, and Filipino menu costing designed for TESDA-aligned training programs."
                        onDetails={() => setIsOpen(true)}
                    />

                    <BrowseResultCard
                        title="Professional Cooking for the Filipino Kitchen"
                        author="Reyes, Amelia C. • Cebu Culinary Press, 2021"
                        material="Book"
                        status="unavailable"
                        location="General Circulation"
                        shelf="R-11"
                        callNo="TX652 .R49 2021"
                        description="A practical foundation in kitchen operations, mise en place, and Filipino menu costing designed for TESDA-aligned training programs."
                        onDetails={() => setIsOpen(true)}
                    />

                    <BrowsePagination />
                </main>
            </div>

            <BookDetailModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                book={sampleBook}
            />
        </PublicLayout>
    );
}
