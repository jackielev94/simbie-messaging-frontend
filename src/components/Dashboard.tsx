import DashboardTile from "./DashboardTile";
import { TypeOfDashboardTile } from "../types";

export default function Dashboard() {

  return (
    <>
      <div className="GridContainer">
        <DashboardTile type={TypeOfDashboardTile.MESSAGES} url="/messages"/>
        <DashboardTile type={TypeOfDashboardTile.MEDICATIONS} url="/medications"/>
        <DashboardTile type={TypeOfDashboardTile.TEST_RESULTS} url="/test-results"/>
        <DashboardTile type={TypeOfDashboardTile.VISITS} url="/visits"/>
      </div>
    </>
  )
}
