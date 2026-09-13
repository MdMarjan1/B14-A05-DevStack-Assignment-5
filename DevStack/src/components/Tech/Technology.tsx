import { use } from "react"
import type maincourseProps from "../../types/maincourseProps"
import Allcard from "./Allcard";

interface TechnologyProps {
    maincourse: Promise<maincourseProps[]>
}

const Technology = ({maincourse}:TechnologyProps) => {
    const tech = use(maincourse);

  return (
  <section className="container mx-auto my-2 md:my-8">
    {/* title part */}
    <div className="py-6 px-3 md:px-0">
        <h1 className=" text-4xl font-bold pb-3.5">Explore the <span className="bg-linear-to-r from-[#D81B7E] to-[#8B5CF6]  bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
    </div>
    {/* logic */}
    <Allcard tech={tech}/>


  </section>
  )
}

export default Technology
