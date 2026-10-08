import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    // Renderer setup with performance considerations
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // 1. Particle Cloud (Glowing cyber stars/nodes)
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const purpleColor = new THREE.Color(0xb600a8);
    const cyanColor = new THREE.Color(0x7621b0);
    const blueColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const mixedColor = i % 3 === 0 ? purpleColor : i % 3 === 1 ? cyanColor : blueColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Floating 3D Geometric Tech Rings (Torus & Wireframe)
    const ringGeo = new THREE.TorusGeometry(8, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7621b0,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    const innerGeo = new THREE.IcosahedronGeometry(5, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xb600a8,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Mouse tracking with lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handling
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate objects
      particles.rotation.y = elapsedTime * 0.04 + mouseX * 0.2;
      particles.rotation.x = elapsedTime * 0.02 - mouseY * 0.2;

      ring.rotation.z = elapsedTime * 0.15;
      ring.rotation.y = mouseX * 0.4;
      ring.rotation.x = Math.PI / 3 + mouseY * 0.3;

      innerMesh.rotation.y = -elapsedTime * 0.1 + mouseX * 0.3;
      innerMesh.rotation.x = elapsedTime * 0.08 - mouseY * 0.3;

      // Gentle camera sway
      camera.position.x = mouseX * 2;
      camera.position.y = -mouseY * 2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80"
      style={{ willChange: 'transform' }}
    />
  );
};

export default ThreeCanvas;
