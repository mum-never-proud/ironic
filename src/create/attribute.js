export default function(attr, value) {
  const attrNode = document.createAttribute(attr);
  attrNode.value = value;

  return attrNode;
}
