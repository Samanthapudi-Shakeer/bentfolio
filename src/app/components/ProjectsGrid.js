import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"
import { GRIDS } from "../constants"

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Projects".split("")

  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("")

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
    <animated.div className='grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-gradient-to-br from-slate-50 to-teal-50'>
      <animated.div
        style={animatedStyles}
        className='row-start-4 lg:row-span-3 lg:col-span-5'
      >
        <animated.div
          style={trails[1]}
          className='w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-4'
      >
        <animated.div
          style={trails[3]}
          className='w-full h-full relative bg-gradient-to-br from-red-400 to-rose-500 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:col-span-3 lg:row-span-6'
      >
        <animated.div
          style={trails[2]}
          className='w-full h-full relative bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className='row-start-1 lg:col-span-3 lg:row-span-3'
      >
        <animated.div
          style={trails[0]}
          className='w-full h-full p-10 bg-gradient-to-br from-green-600 to-emerald-700 border-2 border-slate-800 rounded-xl flex flex-col items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer'
        >
          <div className='border-2 border-slate-800 bg-gradient-to-r from-amber-300 to-yellow-300 w-fit px-5 py-3 rounded-lg shadow-lg'>
            <span className='text-5xl font-bold text-slate-800' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-teal-600 animate-pulse rounded'></span>
            </span>
          </div>
          <div className='border-2 text-center border-slate-800 bg-gradient-to-r from-amber-300 to-yellow-300 w-fit px-5 py-2 rounded-lg shadow-lg'>
            <span className='lg:text-md text-slate-800 font-medium'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-teal-600 animate-pulse rounded'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-3'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full relative bg-gradient-to-br from-emerald-500 to-green-600 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-4'
      >
        <animated.div
          style={trails[5]}
          className='w-full h-full relative bg-gradient-to-br from-red-400 to-rose-500 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-2'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full lg:flex justify-between items-center p-10 gap-5 bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-slate-800 rounded-xl shadow-lg'
        ></animated.div>
      </animated.div>
    </animated.div>
  )
}
