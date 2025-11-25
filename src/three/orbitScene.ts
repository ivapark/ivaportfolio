// src/three/orbitScene.ts
import * as THREE from "three";
import gsap from "gsap";

export function initOrbitScene(container: HTMLDivElement) {
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let group: THREE.Group;
  const cards: THREE.Mesh[] = [];
  let clickable = false;

  let targetRotX = 0;
  let targetRotY = 0;

  const CARD_COUNT = 8;
  const radius = 16;

  // ----- init scene -----
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    500
  );
  camera.position.set(0, 0, 40);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0xffffff);
  container.appendChild(renderer.domElement);

  group = new THREE.Group();
  scene.add(group);

  const textureLoader = new THREE.TextureLoader();

  const baseMat = new THREE.MeshBasicMaterial({
    color: 0xeeeeee,
    side: THREE.DoubleSide,
  });

  const spherePositions = computeSpherePositions(CARD_COUNT, radius);

  for (let i = 0; i < CARD_COUNT; i++) {
    const pos = spherePositions[i];

    const card = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 2),
      baseMat.clone()
    );

    card.position.copy(pos);
    card.scale.set(2, 2, 2);
    cards.push(card);
    group.add(card);

    textureLoader.load(
      `/assets/images/orbit/img${i + 1}.svg`,
      (tex) => {
        card.material.map = tex;
        card.material.needsUpdate = true;
        card.material.transparent = true;
        card.material.opacity = 0;

        gsap.to(card.material, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      },
      undefined,
      (err) => {
        console.error("Texture load error:", err);
      }
    );
  }

  clickable = true;

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function onMouseMove(e: MouseEvent) {
    if (!clickable) return;
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    targetRotY = nx * 0.8;
    targetRotX = ny * 0.6;
  }

  function onClick(e: MouseEvent) {
    if (!clickable) return;

    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const cardHits = raycaster.intersectObjects(cards, false);
    if (cardHits.length === 0) return;

    const clickedCard = cardHits[0].object as THREE.Mesh;
    clickable = false;

    const clone = clickedCard.clone();
    clone.material = (clickedCard.material as THREE.Material).clone();
    (clone.material as THREE.Material).transparent = true;
    (clone.material as THREE.Material).opacity = 1;

    clickedCard.updateMatrixWorld(true);
    clickedCard.getWorldPosition(clone.position);
    clickedCard.getWorldQuaternion(clone.quaternion);
    clone.scale.copy(clickedCard.scale);
    container.appendChild(renderer.domElement);
    scene.add(clone);

    clone.scale.x *= -1;

    const cameraDir = new THREE.Vector3();
    camera.getWorldDirection(cameraDir);

    const distanceFromCamera = 15;
    const targetPos = camera.position.clone().add(
      cameraDir.multiplyScalar(distanceFromCamera)
    );
    const faceQuat = new THREE.Quaternion().copy(camera.quaternion);

    const tl = gsap.timeline();

    tl.to(clone.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 1,
      ease: "power2.out",
    });

    tl.to(
      clone.scale,
      {
        x: clone.scale.x * 3,
        y: clone.scale.y * 3,
        z: clone.scale.z * 3,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    tl.to(
      clone.quaternion,
      {
        x: faceQuat.x,
        y: faceQuat.y,
        z: faceQuat.z,
        w: faceQuat.w,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    const handleOutsideClick = (event: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const m = new THREE.Vector2(
        ((event.clientX - r.left) / r.width) * 2 - 1,
        -((event.clientY - r.top) / r.height) * 2 + 1
      );
      raycaster.setFromCamera(m, camera);
      const checkCard = raycaster.intersectObject(clone, false);

      if (checkCard.length === 0) {
        document.removeEventListener("click", handleOutsideClick);

        const tlOut = gsap.timeline({
          onComplete: () => {
            scene.remove(clone);
            clone.geometry.dispose();
            (clone.material as THREE.Material).dispose();
            clickable = true;
          },
        });

        tlOut.to(clone.material as any, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    };

    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 200);
  }

  let animationId: number;

  function animate() {
    animationId = requestAnimationFrame(animate);

    if (clickable) {
      group.rotation.y += (targetRotY - group.rotation.y) * 0.08;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.08;
    }

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", onResize);
  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("click", onClick);

  // cleanup function
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", onResize);
    container.removeEventListener("mousemove", onMouseMove);
    container.removeEventListener("click", onClick);
    container.removeChild(renderer.domElement);
    renderer.dispose();
    cards.forEach((c) => {
      c.geometry.dispose();
      if (Array.isArray(c.material)) {
        c.material.forEach((m) => m.dispose());
      } else {
        c.material.dispose();
      }
    });
  };
}

function computeSpherePositions(count: number, r: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const offset = 2 / count;
  const inc = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const rad = Math.sqrt(1 - y * y);
    const phi = i * inc;
    const x = Math.cos(phi) * rad;
    const z = Math.sin(phi) * rad;
    pts.push(new THREE.Vector3(x * r, y * r, z * r));
  }

  return pts;
}
