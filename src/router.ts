import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Medications from "./components/Medications";
import Messages from "./components/ThreadList";
import TestResults from "./components/TestResults";
import Visits from "./components/Visits";
import ThreadList from "./components/ThreadList";
import Thread from "./components/Thread";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/messages",
    Component: ThreadList,
  },
  {
    path: "/test-results",
    Component: TestResults
  },
  {
    path: "/visits",
    Component: Visits
  },
  {
    path: "/medications",
    Component: Medications
  },

]);

export default router;
