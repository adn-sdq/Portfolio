function generateRandomKeyframes() {
  const steps = [0, 20, 40, 60, 80, 100]; // Define keyframe steps
  const keyframes: Record<string, { transform: string }> = {};

  let initialTransform = ''; // Store the initial transform for seamless looping

  steps.forEach((step, index) => {
    const translateX = Math.floor(Math.random() * 600 - 300); // Random x translation (-300 to +300)
    const translateY = Math.floor(Math.random() * 600 - 300); // Random y translation (-300 to +300)
    const scale = (Math.random() * (1.2 - 0.8) + 0.8).toFixed(2); // Random scale (0.8 to 1.2)

    const transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    if (index === 0) {
      initialTransform = transform; // Save the initial transform
    }

    keyframes[`${step}%`] = { transform };
  });

  keyframes['100%'] = { transform: initialTransform }; // Ensure seamless looping

  return keyframes;
}

  export default generateRandomKeyframes;
  