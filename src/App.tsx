
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero/hero";
import { ProductModal } from "./components/modal/product";
import { Nav } from "./components/navigation/nav";
import { Product } from "./components/product";
import { Contact } from "./components/reachout";
import Services from "./components/services";
import { SectionHeader } from "./components/shared/section-header";

function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[7rem]  h-full">
        <ProductModal />
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
       <Footer />
      </div>
    </>
  );
}

export default App;
