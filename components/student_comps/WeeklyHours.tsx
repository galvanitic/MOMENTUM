import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar'

interface IWeeklyHoursProps {
}
interface IData {
  "value": number,
  "day": string
}
const data = [
  {
    "weekday-index": 1,
    "weekday": "Sun.",
    "hours": 1
  },
  {
    "weekday-index": 2,
    "weekday": "Mon.",
    "hours": 5
  },
  {
    "weekday-index": 3,
    "weekday": "Tue.",
    "hours": 4
  },
  {
    "weekday-index": 4,
    "weekday": "Wed.",
    "hours": 2
  },
  {
    "weekday-index": 5,
    "weekday": "Thu.",
    "hours": .5
  },
  {
    "weekday-index": 6,
    "weekday": "Fri.",
    "hours": 6
  },
  {
    "weekday": "Sat.",
    "weekday-index": 7,
    "hours": 3
  }
]
const MyResponsiveBar = () => (
  <ResponsiveBar
        data={data}
        keys={[
            'hours'
        ]}
        indexBy="weekday"
        margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
        
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={'#3A585D'}
        
        // fill={[
        //     {
        //         match: {
        //             id: 'fries'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'sandwich'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'week day',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'hours',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    1.6
                ]
            ]
        }}
        role="application"
        ariaLabel="Student Hours"
        barAriaLabel={function (e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

const WeeklyHours: React.FunctionComponent<IWeeklyHoursProps> = (props) => {
  return (
    <div className="weekly_hours_cont widget_cont">
      <div className="weekly_hours widget">
        <h2>Hours This Week</h2>
        <div id="bar_cont">
          <MyResponsiveBar />
        </div>
      </div>
    </div>
  );
};

export default WeeklyHours;
