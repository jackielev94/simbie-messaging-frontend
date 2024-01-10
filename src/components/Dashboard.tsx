import DashboardTile from "./DashboardTile";
import { TypeOfDashboardTile } from "../types";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  return (
    <>
      <div className="GridContainer">
        <DashboardTile type={TypeOfDashboardTile.MESSAGES} url="/messages" personId={location.state.personId} />
        <DashboardTile type={TypeOfDashboardTile.MEDICATIONS} url="/medications"/>
        <DashboardTile type={TypeOfDashboardTile.TEST_RESULTS} url="/test-results"/>
        <DashboardTile type={TypeOfDashboardTile.VISITS} url="/visits"/>
      </div>
    </>
  )
}
