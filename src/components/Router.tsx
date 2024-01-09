import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Medications from "./Medications";
import TestResults from "./TestResults";
import Thread from "./Thread";
import ThreadList from "./ThreadList";
import Visits from "./Visits";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="messages" element={<ThreadList />} />
        <Route path="visits" element={<Visits />} />
        <Route path="test-results" element={<TestResults />} />
        <Route path="medications" element={<Medications />} />
        <Route path="threads/:id" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  )
}
