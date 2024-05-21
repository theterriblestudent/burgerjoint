import Hero from "@components/hero";
import MenuCategories from "@components/menucategories";
import AppSection from "@components/downloadapp";
import SignupSection from "@components/signup";

export default function Home() : JSX.Element {
  return (
    <main className="container-grid relative top-[89px] md:top-[112px]">
      <Hero />
      <MenuCategories />
      <AppSection />
      <SignupSection />
    </main>
  );
}
