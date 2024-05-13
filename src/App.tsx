
import { CTA } from "./components/cta";
import { Hero } from "./components/hero/hero";
import { Nav } from "./components/navigation/nav";
import { Product } from "./components/product";
import { Contact } from "./components/reachout";
import Services from "./components/services";
import { SectionHeader } from "./components/shared/section-header";

function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[7rem]  h-full">
        <Nav />
        <Hero />
        <SectionHeader title="Services" />
        <Services />
        <SectionHeader title="Featured" />
        <CTA />
        <SectionHeader title="Products" />
        <Product />
        <SectionHeader title="Reach Out" />
       <Contact />
      </div>
    </>
  );
}

export default App;
