import { Head } from '@inertiajs/react';
import { AboutSection } from '@/components/public/about-section';
import { HeroSection } from '@/components/public/hero-section';
import { HoursSection } from '@/components/public/hours-section';
import { OffersSection } from '@/components/public/offers-section';
import { ResourcesSection } from '@/components/public/resources-section';
import PublicLayout from '@/layouts/public/layout';

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            <HeroSection />
            <OffersSection />
            <AboutSection />
            <ResourcesSection />
            <HoursSection />
        </PublicLayout>
    );
}
