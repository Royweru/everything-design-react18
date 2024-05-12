import { CTA } from "./components/cta";
import { Hero } from "./components/hero/hero";
import { Nav } from "./components/navigation/nav";
import Services from "./components/services";
import { SectionHeader } from "./components/shared/section-header";

function App() {
  return (
    <>
      <div className=" pt-[1.5rem]  h-full">
        <Nav />
        <Hero />
        <SectionHeader title="Services" />
        <Services />
        <SectionHeader title="Featured" />
        <CTA />
        <SectionHeader title="Products" />
      </div>
    </>
  );
}

export default App;
