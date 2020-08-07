import events from 'constants/events';
import eventStore from 'data/event-store';

export default function attachListeners() {
  events.forEach((event) => document.addEventListener(event, (e) => {
    const eventType = e.type;
    const eventListener = eventStore[e.target.__ironic__id__];

    if (eventListener && typeof eventListener[eventType] === 'function') {
      eventListener[eventType](e);
    }
  }));
}
