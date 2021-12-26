import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface IStudentProgressProps {
}
interface ICenteredMetric {
  dataWithArc: any,
  centerX: number,
  centerY: number
}
const CenteredMetric = ({ dataWithArc, centerX, centerY } : ICenteredMetric) => {
  let total = dataWithArc[0].value
  // dataWithArc.forEach((datum:any) => {
  //   total += datum.value
  // })
  return (
      <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fill: '#F7F7F6',
            fontFamily: 'Proxima',
            fontSize: '20px',
          }}
      >
          {`${total}%`}
      </text>
  )
}
const StudentProgress: React.FunctionComponent<IStudentProgressProps> = (props) => {
  return (
    <div className="student_progress_cont widget_cont">
      <div className="student_progress widget">
      <h2>Progress</h2>
      <ResponsivePie
        data={[{"id": "complete",
        "label": "% complete",
        "value": 80,
        "color": "#D98D7A"},
        {"id": "remaining",
        "label": "% remaining",
        "value": 20,
        "color": "rgba(228, 227, 225, 0)"}]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        fit={false}
        innerRadius={0.5}
        isInteractive={false}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        colors={{ datum: 'data.color' }}
        fill={[
            {
                match: {
                    id: 'complete'
                },
                id: 'complete'
            },
            {
              match: {
                  id: 'remaining'
              },
              id: 'remaining'
          }
        ]}
      //   legends={[
      //     {
      //         anchor: 'bottom',
      //         direction: 'row',
      //         justify: false,
      //         translateX: 0,
      //         translateY: 56,
      //         itemsSpacing: 0,
      //         itemWidth: 100,
      //         itemHeight: 18,
      //         itemTextColor: '#F7F7F6',
      //         itemDirection: 'left-to-right',
      //         itemOpacity: 1,
      //         symbolSize: 18,
      //         symbolShape: 'circle',
      //         effects: [
      //             {
      //                 on: 'hover',
      //                 style: {
      //                     itemTextColor: '#E4E3E1'
      //                 }
      //             }
      //         ]
      //     }
      // ]}
      activeInnerRadiusOffset={8}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
      />
      </div>
    </div>
  );
};

export default StudentProgress;
