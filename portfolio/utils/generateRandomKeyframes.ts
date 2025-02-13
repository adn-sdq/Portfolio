/**
 * Generates a random keyframes object for CSS animations.
 *
 * @param steps - An array of percentages representing keyframe steps.
 * @param translateRange - The range for random translation as [min, max].
 * @param scaleRange - The range for random scale as [min, max].
 * @returns A record where keys are percentage strings and values are objects with transform property.
 */
function generateRandomKeyframes(
  steps: number[] = [0, 20, 40, 60, 80, 100],
  translateRange: [number, number] = [-300, 300],
  scaleRange: [number, number] = [0.8, 1.2]
): Record<string, { transform: string }> {
  const keyframes: Record<string, { transform: string }> = {};
  let initialTransform = "";

  steps.forEach((step, index) => {
    const [min, max] = translateRange;
    const translateX = Math.floor(Math.random() * (max - min + 1) + min);
    const translateY = Math.floor(Math.random() * (max - min + 1) + min);
    const scale = parseFloat(
      (Math.random() * (scaleRange[1] - scaleRange[0]) + scaleRange[0]).toFixed(2)
    );

    const transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    if (index === 0) {
      initialTransform = transform; // Save the first transform for seamless looping
    }

    keyframes[`${step}%`] = { transform: step === 100 ? initialTransform : transform };
  });

  return keyframes;
}

export default generateRandomKeyframes;
