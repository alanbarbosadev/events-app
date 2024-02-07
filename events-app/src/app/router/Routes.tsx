import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailed from "../../features/events/details/EventDetailed";
import EventForm from "../../features/events/form/EventForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/events",
        element: <EventDashboard />,
      },
      {
        path: "/events/:id",
        element: <EventDetailed />,
      },
      {
        path: "/manage/:id",
        element: <EventForm />,
      },
      {
        path: "/createEvent",
        element: <EventForm />,
      },
    ],
  },
]);
