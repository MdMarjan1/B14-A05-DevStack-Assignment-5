
import { Suspense } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technology from "./components/Tech/Technology"
import type maincourseProps from "./types/maincourseProps";

const maincourse = async ():Promise<maincourseProps[]> =>{
  const response = await fetch("/data.json");
  const courses = await response.json();
  return courses
}

const App = () =>{
  return(
    <main >
    <Navbar/>
    <Hero/>
    <Suspense fallback={<p>Loading....</p>}>
       <Technology maincourse={maincourse()}/>
    </Suspense>

    </main>
  )
}
export default App
