// app/page.tsx
import Hero from "@/components/hero";
import Features from "@/components/features";
import Widgets from "@/components/contribute";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <hr></hr>
      <Widgets />
      <Footer />
    </>
  );
}
