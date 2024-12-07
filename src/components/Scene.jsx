import { Box } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import Test3D from "./Over3D/Test";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Scene({ sceneAn }) {
  // useFrame(({ mouse, camera }) => {
  //   camera.position.x = THREE.MathUtils.lerp(
  //     camera.position.x,
  //     mouse.x * 0.5,
  //     0.03
  //   );
  //   camera.position.y = THREE.MathUtils.lerp(
  //     camera.position.y,
  //     mouse.y * 0.8,
  //     0.01
  //   );
  //   camera.position.z = THREE.MathUtils.lerp(
  //     camera.position.z,
  //     Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
  //     0.01
  //   );
  //   camera.rotation.y = THREE.MathUtils.lerp(
  //     camera.rotation.y,
  //     mouse.x * -Math.PI * 0.025,
  //     0.001
  //   );
  // });
  const { rotation } = useSpring({
    rotation: sceneAn==2 ? [1,1,1] : 
              sceneAn==3 ? [2,2,2] : 
              sceneAn==4 ? [3,3,3] : 
              sceneAn==5 ? [4,4,4] : 
              [0,0,0] ,
  });

  return (
    <>
      <animated.mesh rotation={rotation}>
        <Box args={[1, 1, 1]}>
          <meshNormalMaterial/>
        </Box>
      </animated.mesh>
    </>
  );
}