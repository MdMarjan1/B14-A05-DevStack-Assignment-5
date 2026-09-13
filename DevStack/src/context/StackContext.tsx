import { createContext, useContext, useState, type ReactNode } from "react";
import type maincourseProps from "../types/maincourseProps";
import { toast } from "react-toastify";

interface StackContextType {
  stack: maincourseProps[];
  addToStack: (item: maincourseProps) => void;
  removeFromStack: (id: maincourseProps["id"]) => void;
  removeAll: () => void;
  isInStack: (id: maincourseProps["id"]) => boolean;
}

const StackContext = createContext<StackContextType | undefined>(undefined);

export const StackProvider = ({ children }: { children: ReactNode }) => {
  const [stack, setStack] = useState<maincourseProps[]>([]);

  const addToStack = (item: maincourseProps) => {
    setStack((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
    toast.success(`${item.name} added to your stack`);
  };

  const removeFromStack = (id: maincourseProps["id"]) => {
    setStack((prev) => prev.filter((i) => i.id !== id));
  };

  const removeAll = () => setStack([]);

  const isInStack = (id: maincourseProps["id"]) =>
    stack.some((i) => i.id === id);

  return (
    <StackContext.Provider
      value={{ stack, addToStack, removeFromStack, removeAll, isInStack }}
    >
      {children}
    </StackContext.Provider>
  );
};

export const useStack = () => {
  const context = useContext(StackContext);
  if (!context) throw new Error("useStack must be used within a StackProvider");
  return context;
};