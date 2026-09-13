import { IoClose } from "react-icons/io5";
import { useStack } from "../../context/StackContext";

const YourStack = () => {
  const { stack, removeFromStack, removeAll } = useStack();

  return (
    <div className="h-48 border border-gray-200 rounded-xl p-4 m-3">
      <h3 className="font-bold pb-1">Your Stack</h3>
      <p className="text-[#64748B] text-sm pb-3">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed rounded p-4 text-center text-sm text-gray-400">
          Your stack is empty
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 mb-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded px-2 py-1.5"
              >
                <div className="flex items-center gap-2">
                  <img className="h-5" src={item.icon} alt="" />
                  <span className="text-sm">{item.name}</span>
                </div>
                <button onClick={() => removeFromStack(item.id)}>
                  <IoClose className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={removeAll}
            className="w-full text-red-500 border border-red-200 rounded py-1.5 text-sm hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;