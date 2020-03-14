import createObject from './utils/create-object';

export default function(tag, { props = {}, children = [] } = {}) {
  return createObject({
    tag,
    props,
    children
  });
}
