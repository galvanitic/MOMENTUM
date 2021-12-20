import * as React from 'react';
import { useUser } from "../lib/hooks";
import Toolbar from "../components/toolbar";

export interface INotificationsProps {
}

export default function Notifications (props: INotificationsProps) {
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  const [profile, chProfile] = React.useState<String>('/profile.png');
  
  React.useEffect(()=>{
    // To handle profile picture
  })
  return (
    <div className="notifications">
      
    </div>
  );
}