import { Button, Form, Header, Segment } from "semantic-ui-react";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/store/store";
import { useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../eventSlice";
import { createId } from "@paralleldrive/cuid2";

export default function EventForm() {
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((x) => x.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialEventData = event ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [eventData, setEventData] = useState(initialEventData);

  function onSubmit() {
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...eventData }))
      : dispatch(
          createEvent({
            ...eventData,
            id,
            hostedBy: "Bob",
            hostPhotoURL: "",
            attendees: [],
          })
        );

    navigate(`/events/${id}`);
  }

  function handleInputChanges(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  }

  return (
    <>
      <Segment clearing>
        <Header content={event ? "Update Event" : "Create Event"} />
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
