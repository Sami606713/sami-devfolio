"use client";

import { useEffect, useRef } from "react";

/**
 * Isolated WebGL scene. This file does not import Motion.
 * Pointer parallax is stored on a ref so React does not re-render per frame.
 */
export function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let frame = 0;
    const pointer = { x: 0, y: 0 };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const disposers: Array<() => void> = [];

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    canvas.addEventListener("pointermove", onMove);

    const boot = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
      camera.position.set(0, 0.12, 5.4);

      const group = new THREE.Group();
      scene.add(group);

      const accent = new THREE.Color(
        getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#c5d4a4",
      );
      const bone = new THREE.Color(
        getComputedStyle(document.documentElement).getPropertyValue("--text").trim() || "#e7e6df",
      );

      const solid = new THREE.IcosahedronGeometry(1.05, 1);
      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(solid),
        new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.9 }),
      );
      group.add(wire);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.38, 0),
        new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.55 }),
      );
      group.add(core);

      const satGeo = new THREE.SphereGeometry(0.045, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ color: bone });
      const satellites = [0, 1, 2, 3].map(() => {
        const mesh = new THREE.Mesh(satGeo, satMat);
        group.add(mesh);
        return mesh;
      });

      const applyTheme = () => {
        const nextAccent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
        const nextBone = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
        if (nextAccent) {
          wire.material.color.set(nextAccent);
          core.material.color.set(nextAccent);
        }
        if (nextBone) satMat.color.set(nextBone);
      };

      const resize = () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      resize();

      const themeObserver = new MutationObserver(applyTheme);
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

      const clock = new THREE.Clock();
      const loop = () => {
        if (disposed) return;
        if (!reduce) {
          const t = clock.getElapsedTime();
          group.rotation.y = t * 0.16 + pointer.x * 0.45;
          group.rotation.x = pointer.y * 0.28;
          satellites.forEach((mesh, index) => {
            const angle = t * 0.4 + (index * Math.PI) / 2;
            const radius = 1.28 + (index % 2) * 0.1;
            mesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 0.85) * 0.38, Math.sin(angle) * radius);
          });
        }
        renderer.render(scene, camera);
        frame = requestAnimationFrame(loop);
      };
      loop();

      disposers.push(() => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        themeObserver.disconnect();
        solid.dispose();
        wire.geometry.dispose();
        wire.material.dispose();
        core.geometry.dispose();
        core.material.dispose();
        satGeo.dispose();
        satMat.dispose();
        renderer.dispose();
      });
    };

    void boot();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onMove);
      disposers.forEach((dispose) => dispose());
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />;
}
