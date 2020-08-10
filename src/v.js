import createObject from './utils/create-object';

export default function v(tag, props, ...children) {
  return createObject({
    tag,
    props: props || {},
    children: children.flat(),
  });
}
