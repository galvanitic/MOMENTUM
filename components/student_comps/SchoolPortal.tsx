import * as React from 'react';
import Image from 'next/image';

interface ISchoolPortalProps {
}

const SchoolPortal: React.FunctionComponent<ISchoolPortalProps> = (props) => {
  return (
    <div className="school_portal_cont widget_cont">
      <div className="school_portal widget">
        <Image className='school_logo' src='/snhu_logo_white.png' alt="Southern New Hampshire University Logo" layout="fill" objectFit="scale-down"/>
        <Image className='school_bg' src='/snhu_bg.jpeg' alt="Southern New Hampshire University Background" layout="fill" objectFit="cover"/>
      </div>
    </div>
  );
};

export default SchoolPortal;
