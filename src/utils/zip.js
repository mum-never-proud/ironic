export default function(x, y) {
  const zipped = [],
    len = Math.min(x.length, y.length);

  let i = 0;

  for (; i < len; i++) {
    zipped.push([x[i], y[i]]);
  }

  return zipped;
}
