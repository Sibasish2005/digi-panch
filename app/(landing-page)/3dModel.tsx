"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ModelViewer() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const width = mountRef.current.clientWidth || 600;
        const height = mountRef.current.clientHeight || 600;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(window.devicePixelRatio);

        mountRef.current.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const fillLight = new THREE.DirectionalLight(0xffd580, 1);
        fillLight.position.set(-5, 0, -5);
        scene.add(fillLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minPolarAngle = Math.PI / 2 - 0.1;
        controls.maxPolarAngle = Math.PI / 2 + 0.1;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Load GLB Model
        const loader = new GLTFLoader();
        loader.load("/Ashoka.glb", (gltf) => {
            const model = gltf.scene;

            // Compute bounding box
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            // Center the model
            model.position.sub(center);

            // Scale to fit viewport nicely
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4 / maxDim;
            model.scale.setScalar(scale);

            scene.add(model);
        });

        // Handle resize
        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            const mount = mountRef.current;
            if (mount && renderer.domElement.parentNode === mount) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-[400px] lg:h-[600px]" />;
}