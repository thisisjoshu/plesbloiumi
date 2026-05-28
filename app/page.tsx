import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "./_landing/Hero";
import { FeaturedStays } from "./_landing/FeaturedStays";
import { Activities } from "./_landing/Activities";
import { Editorial } from "./_landing/Editorial";
import { ByTheNumbers } from "./_landing/ByTheNumbers";
import { Stories } from "./_landing/Stories";
import { HostCTA } from "./_landing/HostCTA";

export default function Home() {
  return (
    <>
      <Nav
        current="stays"
        links={[
          { key: "stays", label: "Stays" },
          { key: "activities", label: "Activities" },
          { key: "stories", label: "Stories" },
          { key: "plan", label: "Plan a trip" },
        ]}
      />
      <main className="flex-1">
        <Hero />
        <FeaturedStays />
        <Activities />
        <Editorial />
        <ByTheNumbers />
        <Stories />
        <HostCTA />
      </main>
      <Footer />
    </>
  );
}
