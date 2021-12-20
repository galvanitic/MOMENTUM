import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface IStudentProgressProps {
}

const StudentProgress: React.FunctionComponent<IStudentProgressProps> = (props) => {
  return (
    <div className="student_progress_cont widget_cont">
      <div className="student_progress widget">
      <ResponsivePie
        data={[{"id": "complete",
        "label": "complete",
        "value": 80,
        "color": "#D98D7A"},
        {"id": "remaining",
        "label": "remaining",
        "value": 20,
        "color": "rgba(0,0,0,0)"}]}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        fit={false}
        innerRadius={0.5}
        isInteractive={false}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'empty',
                type: "patternLines",
                spacing: 5,
                rotation: 0,
                lineWidth: 0,
                background: "#3a585d",
                color: "#3a585d"
            },
            {
                id: 'complete',
                type: "patternLines",
                spacing: 5,
                rotation: 0,
                lineWidth: 0,
                background: "#d98d7a",
                color: "#d98d7a"
            }
        ]}
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
              id: 'empty'
          }
        ]}
        legends={[]}
    />
      </div>
    </div>
  );
};

export default StudentProgress;
