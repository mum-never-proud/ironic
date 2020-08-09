export default function isVElement(...nodes) {
  if (!nodes.length) {
    return false;
  }

  for (let i = 0; i < nodes.length; i += 1) {
    if (!(nodes[i] && nodes[i].tag)) {
      return false;
    }
  }

  return true;
}
