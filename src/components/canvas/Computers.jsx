import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <mesh>
      <hemisphereLight intensity={5.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={12} castShadow />
      <primitive object={computer.scene} scale={isMobile ? 0.50 : 0.60} position={isMobile ? [0, -3, -2.2] : [0, -3.10, -1.5]} rotation={[-0.01, -0.2, -0.1]}  />
    </mesh>
    </Float>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
     // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <section className="relative w-full h-screen mx-auto">
      <span>You can move this 3D object </span>
      <Canvas frameloop="always" shadows camera={{position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    </section>
  
  )
}

export default ComputersCanvas