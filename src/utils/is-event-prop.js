export default function isEventProp(eventName) {
  return /^on/.test(eventName);
}
