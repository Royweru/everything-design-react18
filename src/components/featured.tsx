import { motion } from "framer-motion";

export const Featured = () => {
  return (
    <section
      className="mx-auto container px-4 py-12 text-color-2"
      id="featured"
    >
      <div className="mb-8 flex flex-col items-center justify-center gap-4  md:px-4">
        <h2
          className=" max-w-6xl xl:txt-2xl md:text-xl text-lg  font-code font-semibold tracking-wide
         leading-relaxed "
        >
          We design and make genuine designs customized to your taste with our
          unique eye and creativity.You are assured of genuine work and design
          suiting your need from web design to t-shirts jerseys and mugs
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4 md:px-8 ">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>
            <img
              src="https://i.pinimg.com/564x/f2/50/c2/f250c2bda83144cb97075cc509350121.jpg"
              alt=""
              className=" object-cover object-center rounded-3xl h-[250px] w-full"
            />
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-3xl  text-center font-semibold text-n-10">
              Top
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>
            <img
              src="https://i.pinimg.com/564x/31/36/79/313679ff0c4c6c47804d91750a542e35.jpg"
              alt=""
              className=" object-cover object-center rounded-3xl h-[250px] w-full"
            />
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center text-3xl font-semibold text-orange-50">
              Tier
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4 md:px-8">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>
            <img
              src="https://i.pinimg.com/564x/35/e7/4d/35e74d8de29f6c756c70496c41c97d15.jpg"
              alt=""
              className=" object-cover object-center rounded-3xl h-[250px] w-full"
            />
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center text-3xl font-semibold text-color-5">
              Creativity
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>
            <img
              src="https://i.pinimg.com/564x/d1/47/7a/d1477a9686d622b3d0b32e5ff41eb7b4.jpg"
              alt=""
              className=" object-cover object-center rounded-3xl h-[250px] w-full"
            />
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-3xl text-center font-semibold text-color-6">
              unleashed
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return <h3 className=" relative  w-full rounded-3xl h-max">{children}</h3>;
};
