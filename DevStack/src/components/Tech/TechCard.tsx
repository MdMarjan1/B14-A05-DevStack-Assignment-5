
import { TiStar } from "react-icons/ti";
import type maincourseProps from "../../types/maincourseProps";
import { useStack } from "../../context/StackContext";

interface TechCardProps {
  tec: maincourseProps;
}

const TechCard = ({ tec }: TechCardProps) => {
  const { addToStack, isInStack } = useStack();
  const added = isInStack(tec.id);

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm p-5 m-1">
        <div className="flex justify-between pb-2.5">
          <div>
            <img className="h-11" src={tec.icon} alt="" />
          </div>
          <div>
            <button className="bg-[#bcdfef] text-blue-800 rounded px-2">
              {tec.badge}
            </button>
          </div>
        </div>
        <h3 className="text-2xl font-bold pb-1">{tec.name}</h3>
        <p className="text-[#64748B] pb-3">{tec.description}</p>

        <div className="div-rating flex justify-between my-1.5">
          <p className="bg-[#F1F5F9] px-3 rounded text-[12px]">
            {tec.category}
          </p>
          <p className="text-[12px]">{tec.difficulty}</p>
          <div className="flex items-center gap-1">
            <TiStar className="text-yellow-400" />
            <p className="text-[12px]">{tec.rating}</p>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={() => addToStack(tec)}
            disabled={added}
            className={`w-full rounded-2xl py-2 pb-3 transition ${
              added
                ? "bg-pink-200 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {added ? "Added" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;