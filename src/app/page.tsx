import Hero from "@components/hero";
import MenuCategories from "@components/menucategories";

export default function Home() {
  return (
    <main className="container-grid relative top-[89px] md:top-[112px]">
      <Hero />
      <MenuCategories />
    </main>
  );
}
