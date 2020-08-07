import eventStore from 'data/event-store';
import uniqid from 'uniqid';

export default function registerEvent($el, eventProp, callback) {
  const eventName = eventProp.slice(2).toLowerCase();

  if (!callback) {
    return delete eventStore[$el.__ironic__id__][eventName];
  }

  if (!$el.__ironic__id__) {
    // eslint-disable-next-line no-param-reassign
    $el.__ironic__id__ = uniqid();

    eventStore[$el.__ironic__id__] = {};
  }

  const eventHandler = eventStore[$el.__ironic__id__][eventName];

  if (!eventHandler || eventHandler.toString() !== callback.toString()) {
    eventStore[$el.__ironic__id__][eventName] = callback;
  }
}
