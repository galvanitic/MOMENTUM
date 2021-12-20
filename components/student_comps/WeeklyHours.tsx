import * as React from 'react';

interface IWeeklyHoursProps {
}

const WeeklyHours: React.FunctionComponent<IWeeklyHoursProps> = (props) => {
  return (
    <div className="weekly_hours_cont widget_cont">
      <div className="weekly_hours widget"></div>
    </div>
  );
};

export default WeeklyHours;
