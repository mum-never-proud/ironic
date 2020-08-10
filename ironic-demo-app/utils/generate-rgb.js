import generateRandom from 'utils/generate-random';

export default function generateRGB() {
  return Array.from({ length: 3 }, () => generateRandom(255));
}
