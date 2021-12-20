import * as React from 'react';
import { useUser } from "../lib/hooks";
import Toolbar from "../components/toolbar";

interface ITimeKeeperProps {
}

const TimeKeeper: React.FunctionComponent<ITimeKeeperProps> = (props) => {
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  const [profile, chProfile] = React.useState<String>('/profile.png');
  return (
    <div className="timekeeper">
      
    </div>
  );
};

export default TimeKeeper;
