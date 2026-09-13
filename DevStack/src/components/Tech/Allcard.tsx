


import type maincourseProps from "../../types/maincourseProps";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

interface AllcardProps {
  tech: maincourseProps[];
}

const Allcard = ({ tech }: AllcardProps) => {
  return (
    <section className="grid md:grid-cols-1  lg:grid-cols-4 gap-2 md:mb-7">
      <div className="grid md:grid-cols-1  lg:grid-cols-3 lg:col-span-3 md:gap-4 mx-5">
        {tech.map((tec) => (
          <TechCard key={tec.id} tec={tec} />
        ))}
      </div>
      <div className="w-full shrink-0 mb-4">
        <YourStack />
      </div>
    </section>
  );
};

export default Allcard;
