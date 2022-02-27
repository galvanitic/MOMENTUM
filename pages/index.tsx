import * as React from 'react';
import { useUser } from "../lib/hooks";
import Layout from "../components/layout";
import StudentProgress from '../components/student_comps/StudentProgress';
import WeeklyHours from '../components/student_comps/WeeklyHours';
import SchoolPortal from '../components/student_comps/SchoolPortal';
import ScheduleAppt from '../components/student_comps/ScheduleAppt';
import ProjectTracker from '../components/student_comps/ProjectTracker';
import TimeKeeper from '../components/student_comps/timekeeper';
export default function Home() {
  const [profile, chProfile] = React.useState<String>('/profile.png');
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  
  React.useEffect(()=>{
    console.log(user);
  })
  return (
    <div className="dash">
      <div className="main_dash_container">
        <div id="container_1" className="dash_container">
          <h2>At a Glance</h2>
          <div className="dash_content">
            <StudentProgress />
            <WeeklyHours />
            <SchoolPortal />
            <ScheduleAppt />
          </div>
        </div>
        <div id="container_2" className="dash_container">
          <h2>Project Tracker</h2>
          <ProjectTracker />
        </div>
        <div id="container_3" className="dash_container">
          <h2>Timekeeper</h2>
          <TimeKeeper />
        </div>
      </div>
    </div>
  )
}
