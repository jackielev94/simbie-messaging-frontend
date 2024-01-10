import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "./Login";
import { ThreadList, Thread } from "./threads";
import { Visits, TestResults, Medications } from "./placeholders";

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
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
