export default function zip(x, y) {
  const zipped = [];
  const len = Math.min(x.length, y.length);
  let i = 0;

  for (; i < len; i += 1) {
    zipped.push([x[i], y[i]]);
  }

  return zipped;
}
