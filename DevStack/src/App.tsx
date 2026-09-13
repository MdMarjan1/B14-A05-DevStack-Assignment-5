import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technology from "./components/Tech/Technology";
import type maincourseProps from "./types/maincourseProps";
import { StackProvider } from "./context/StackContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer"




const maincourse = async (): Promise<maincourseProps[]> => {
  const response = await fetch("/data.json");
  const courses = await response.json();
  return courses;
};

const App = () => {
  return (
    <StackProvider>
      <main>
        <Navbar />
        <Hero />
        <Suspense fallback={<p>Loading....</p>}>
          <Technology maincourse={maincourse()} />
        </Suspense>
        <Footer/>

        
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </StackProvider>
  );
};

export default App;
