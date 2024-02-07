import { Button, Form, Header, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function EventForm() {
  const initialEventData = {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [eventData, setEventData] = useState(initialEventData);

  function onSubmit() {
    console.log(eventData);
    // selectedEvent
    //   ? updateEvent({ ...selectedEvent, ...eventData })
    //   : addEvent({
    //       ...eventData,
    //       id: createId(),
    //       hostedBy: "Bob",
    //       hostPhotoURL: "",
    //       attendees: [],
    //     });
    // setFormOpen(false);
  }

  function handleInputChanges(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  }

  return (
    <>
      <Segment clearing>
        <Header content={"Create Event"} />
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Event title"
              name="title"
              value={eventData.title}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={eventData.category}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={eventData.description}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={eventData.city}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={eventData.venue}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={eventData.date}
              onChange={(e) => handleInputChanges(e)}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            type="button"
            floated="right"
            content="Cancel"
            as={Link}
            to="/events"
          />
        </Form>
      </Segment>
    </>
  );
}
