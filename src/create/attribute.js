export default function attribute(attr, value) {
  const attrNode = document.createAttribute(attr === 'className' ? 'class' : attr);
  attrNode.value = value;

  return attrNode;
}
