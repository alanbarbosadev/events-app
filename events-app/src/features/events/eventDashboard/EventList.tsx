import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[];
  handleSelectedEvent: (event: AppEvent) => void;
  deleteEvent: (eventId: string) => void;
};

export default function EventList({
  events,
  handleSelectedEvent,
  deleteEvent,
}: Props) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          handleSelectedEvent={handleSelectedEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
