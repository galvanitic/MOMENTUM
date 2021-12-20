import * as React from 'react';

interface IScheduleApptProps {
}

const ScheduleAppt: React.FunctionComponent<IScheduleApptProps> = (props) => {
  return (
    <div className="schedule_appt_cont widget_cont">
      <div className="schedule_appt widget"></div>
    </div>
  );
};

export default ScheduleAppt;
