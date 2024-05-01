import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import { transitionVariants } from '../hoc/SectionWrapper'
import FboParticles from './canvas/fboParticles'
import SocialLinks from './SocialLinks'

const Home = () => {
  return (
    <>
    <motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2b71]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e2257]' variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>
        <FboParticles />
        <SocialLinks />
        <Hero />
    </motion.div>
    </>
  )
}

export default Home;