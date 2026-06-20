// app/page.tsx
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Widgets from "@/components/home/contribute";
import Footer from "@/components/home/footer";

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
