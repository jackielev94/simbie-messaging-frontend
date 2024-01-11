import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "./Login";
import { ThreadList, Thread } from "./threads";
import { Visits, TestResults, Medications, PatientList, UpcomingAppointments, StaffAssignments } from "./placeholders";
import Header from "./Header";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="messages" element={<ThreadList />} />
        <Route path="visits" element={<Visits />} />
        <Route path="test-results" element={<TestResults />} />
        <Route path="medications" element={<Medications />} />
        <Route path="patient-list" element={<PatientList />} />
        <Route path="upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="staff-assignments" element={<StaffAssignments />} />
        <Route path="threads/:id" element={<Thread />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
