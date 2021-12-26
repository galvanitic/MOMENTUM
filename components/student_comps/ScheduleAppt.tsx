import * as React from 'react';
// import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
interface IScheduleApptProps {
}

const ScheduleAppt: React.FunctionComponent<IScheduleApptProps> = (props) => {
  return (
    <div className="schedule_appt_cont widget_cont">
      <div className="schedule_appt widget">
        <h2>Schedule a Meeting with Your Coach</h2>
        <div className="coach_profile">
          <Avatar alt="Cynthia Suarez" src=""/>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppt;
