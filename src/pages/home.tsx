/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductModal } from "@/components/modal/product";
import { Nav } from "@/components/navigation/nav";
import { Hero } from "@/components/hero/hero";
import { SectionHeader } from "@/components/shared/section-header";
import Services from "@/components/services";

import { Product } from "@/components/product";
import { Contact } from "@/components/reachout";
import { Footer } from "@/components/footer";
import { Featured } from "@/components/featured";
// import { fetchProduts } from "@/actions/FetchProducts";
// import { useEffect, useState } from "react";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getProd();
  // }, []);
  // const getProd = async () => {
  //   const data = await fetchProduts();

  //   setProducts(data);
  // };

  return (
    <div className=" pt-[4.75rem] lg:pt-[5.95 rem]  h-full  max-w-7xl ">
      <ProductModal />
      <Nav />
      <Hero />
      <SectionHeader title="Services" />
      <Services />
      <SectionHeader title="Featured" />
      <Featured />
      <SectionHeader title="Products" />
      <Product />
      <SectionHeader title="Reach Out" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
