import * as React from 'react';
import { useUser } from "../lib/hooks";
import Toolbar from "../components/toolbar";
import Notifications from '../components/dash_comps/Notifications'
export interface INotificationsContProps {
}

export default function NotificationsCont (props: INotificationsContProps) {
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  const [profile, chProfile] = React.useState<String>('/profile.png');
  
  React.useEffect(()=>{
    // To handle profile picture
  })
  return (
    <div id="notifications-page">
      <Notifications />
    </div>
  );
}