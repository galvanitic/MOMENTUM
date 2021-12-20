import * as React from 'react';
import { useUser } from "../lib/hooks";
import Layout from "../components/layout";
import StudentProgress from '../components/student_comps/StudentProgress';
import WeeklyHours from '../components/student_comps/WeeklyHours';
import SchoolPortal from '../components/student_comps/SchoolPortal';
import ScheduleAppt from '../components/student_comps/ScheduleAppt';
import CommunityBoard from '../components/dash_comps/CommunityBoard';

export default function Home() {
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  const [profile, chProfile] = React.useState<String>('/profile.png');
  
  React.useEffect(()=>{
    // To handle profile picture
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
          <h2>Community Board</h2>
          <CommunityBoard />
        </div>
        <div id="container_3" className="dash_container">
        </div>
      </div>
    </div>
  )
}
