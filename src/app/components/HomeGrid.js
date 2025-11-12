import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"

import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Education from "./Education"
import Resume from "./Resume"
import Blog from "./Blog"
import Contact from "./Contact"
import Misc from "./Misc"
import { GRIDS } from "../constants"

export default function HomeGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Shakeer Samanthapudi".split("")

  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "AI/ML Engineer | Data Science Enthusiast".split("")

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1)
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1)
      }
    }, 100)

    return () => {
      clearInterval(id)
    }
  })

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  })

  return (
    <animated.div className='grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-gradient-to-br from-slate-50 to-blue-50'>
      <animated.div
        style={animatedStyles}
        className='row-start-5 md:row-span-6 md:col-span-3'
      >
        <animated.div
          style={trails[1]}
          className='relative bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-slate-800 h-full w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          <WorkExperience />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-3 md:col-span-3'
      >
        <animated.div
          onClick={() => setCurrentGrid(GRIDS[1])}
          style={trails[3]}
          className='relative h-full w-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
        >
          <Projects />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:col-span-3 md:row-span-3'
      >
        <animated.div
          style={trails[2]}
          className='relative h-full w-full border-2 border-slate-800 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
        >
          <Education />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='row-start-1 md:col-span-4 md:row-span-3'
      >
        <animated.div
          style={trails[0]}
          className='h-full w-full p-10 bg-gradient-to-br from-amber-300 via-yellow-300 to-amber-400 border-2 border-slate-800 rounded-xl flex flex-col items-center justify-center gap-3 shadow-xl'
        >
          <div className='border-2 border-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 w-fit px-5 py-3 rounded-lg shadow-lg'>
            <span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-teal-400 animate-pulse rounded'></span>
            </span>
          </div>
          <div className='border-2 text-center border-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 w-fit px-5 py-2 rounded-lg shadow-lg'>
            <span className='md:text-md text-amber-300'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-teal-400 animate-pulse rounded'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-4 md:col-span-2'
      >
        <animated.div
          style={trails[4]}
          className='h-full w-full relative border-2 border-slate-800 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
        >
          <Blog />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-3 md:col-span-2'
      >
        <animated.div
          style={trails[5]}
          className='h-full w-full relative border-2 border-slate-800 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
        >
          <Resume />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-3 md:col-span-5'
      >
        <animated.div
          style={trails[4]}
          className='h-full w-full md:flex justify-between items-center p-10 gap-5 bg-gradient-to-br from-sky-300 to-blue-400 border-2 border-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
        >
          <Contact />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className='md:row-span-2 md:col-span-2'
      >
        <animated.div
          style={trails[6]}
          className='h-full w-full relative border-2 border-slate-800 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
        >
          <Misc />
        </animated.div>
      </animated.div>
    </animated.div>
  )
}
