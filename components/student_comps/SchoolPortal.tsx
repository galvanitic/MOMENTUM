import * as React from 'react';

interface ISchoolPortalProps {
}

const SchoolPortal: React.FunctionComponent<ISchoolPortalProps> = (props) => {
  return (
    <div className="school_portal_cont widget_cont">
      <div className="school_portal widget"></div>
    </div>
  );
};

export default SchoolPortal;
