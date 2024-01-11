import DashboardTile from "./DashboardTile";
import { TypeOfAccount, TypeOfDashboardTile } from "../../types";
import { useLocation } from "react-router-dom";
import { getLocalStorage } from "../../utils";

export default function Dashboard() {
  const location = useLocation();
  const personId = location.state?.personId ?? getLocalStorage('personId');
  const role = location.state?.role ?? getLocalStorage('role')

  return (
    <>
      <div className="GridContainer">
        <DashboardTile type={TypeOfDashboardTile.MESSAGES} url="/messages" personId={personId} role={role} />
        {role === TypeOfAccount.PATIENT ?
          <>
            <DashboardTile type={TypeOfDashboardTile.MEDICATIONS} url="/medications"/>
            <DashboardTile type={TypeOfDashboardTile.TEST_RESULTS} url="/test-results"/>
            <DashboardTile type={TypeOfDashboardTile.VISITS} url="/visits"/>
          </>
         :
         <>
          <DashboardTile type={TypeOfDashboardTile.PATIENT_LIST} url="/patient-list"/>
          <DashboardTile type={TypeOfDashboardTile.UPCOMING_APPOINTMENTS} url="/upcoming-appointments"/>
          <DashboardTile type={TypeOfDashboardTile.STAFF_ASSIGNMENTS} url="/staff-assignments"/>
          </>
        }
      </div>
    </>
  )
}
