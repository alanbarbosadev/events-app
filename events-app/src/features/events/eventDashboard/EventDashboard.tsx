import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectedEvent: AppEvent | null;
  handleSelectedEvent: (event: AppEvent | null) => void;
};

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectedEvent,
  handleSelectedEvent,
}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((previousState) => {
      return [...previousState, event];
    });
  }

  function updateEvent(updatedEvent: AppEvent) {
    setEvents(
      events.map((event) =>
        event.id == updatedEvent.id ? updatedEvent : event
      )
    );
    handleSelectedEvent(null);
    setFormOpen(false);
  }

  function deleteEvent(eventId: string) {
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleSelectedEvent={handleSelectedEvent}
            deleteEvent={deleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              addEvent={addEvent}
              selectedEvent={selectedEvent}
              updateEvent={updateEvent}
              key={selectedEvent ? selectedEvent.id : "create"}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
