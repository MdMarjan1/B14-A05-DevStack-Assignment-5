import type maincourseProps from "../../types/maincourseProps";
import TechCard from "./TechCard";

interface AllcardProps {
  tech: maincourseProps[];
}

const Allcard = ({ tech }: AllcardProps) => {
  return (
    <section className="flex">
      <div className="grid grid-cols-3 gap-3">
        {tech.map((tec) => (
          <TechCard key={tec.id} tec={tec} />
        ))}
      </div>
      <div>
          
      </div>
    </section>
  );
};

export default Allcard;
