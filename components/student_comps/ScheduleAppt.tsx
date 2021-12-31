import * as React from 'react';
// import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import CoachIcon from '@mui/icons-material/Sports';
interface IScheduleApptProps {
}

const ScheduleAppt: React.FunctionComponent<IScheduleApptProps> = (props) => {
  return (
    <div className="schedule_appt_cont widget_cont">
      <div className="schedule_appt widget">
        <div className="schedule_text">
          <CoachIcon sx={{fontSize: '400%', color: '#64ad98'}} />
        </div>
        <div className="coach_profile">
            <h2>Schedule a Meeting with Your Coach</h2>
          <div className="coach_info">
            <Avatar sx={{marginRight: '10px'}} alt="Cynthia Suarez" src=""/>
            <h3>Cynthia Suarez</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppt;
