import React from 'react'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#" onClick={() => window.scrollTo(1300, 1300)}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
        <ComputersCanvas />
    </div>
  )
}

export default Home