import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import '../index.css'

export const Intro = () => {
    return (
        <section id="intro" className="h-screen">
            <div className="relative">
                <div className="absolute z-10 lg:left-52  top-52 text-2xl" >
                    <div className="text-3xl flick">
                    WARNING!! this potfolio is still under construction
                    </div>
                    <div className="flick mt-10">Hi, my name is Oleksii, front-end developer</div>
                </div>
                <div className="absolute block h-screen z-10  w-screen lg:hidden"></div>
            </div>
            <Suspense fallback={null}>
                <Canvas shadows>
                    <Space/>
                </Canvas>
            </Suspense>
          
        </section>
    )
}
const Space = () => {
    return (
        <>
            <OrbitControls autoRotate target={[0, 1.5, 0]} maxPolarAngle={Math.PI / 2} maxAzimuthAngle={Math.Pi / 2} maxDistance={2} enableZoom={false} minPolarAngle={1.6} rotateSpeed={0.1} />
            <PerspectiveCamera makeDefault fov={60} position={[0, 0, 5]} />
            <color args={[0, 0, 0]} attach='background' />
            <SpaceModel />
        </>
    )
}
const SpaceModel = () => {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/boy/scene.gltf"
    )
    useEffect(() => {
        gltf.scene.scale.set(0.555, 0.555, 0.555)
        gltf.scene.position.set(0, 0, 0)

    }, [gltf])
    return <primitive object={gltf.scene} />
}