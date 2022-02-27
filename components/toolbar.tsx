import * as React from 'react'
import Image from 'next/image';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import UserPreview from './UserPreview';
import Link from 'next/link'
import router from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface IToolbarProps {
  user_fname?: string,
  user_lname?: string,
  user_email?: string
}

export function Toolbar (props: IToolbarProps) {
  // const [activeTab, chActiveTab] = React.useState<number>(0);
  const [tabState, chTabState] = React.useState<Array<string>>(['active', 'passive', 'passive', 'passive']);
  const [tabs, chTabs] = React.useState<Array<string>>(['/', '/resources', '/apps', '/notifications']);
  React.useEffect(() => {
    // Handle tab
    
    switch(router.pathname){
      case tabs[0]:
        //Dash is active
        chTabState(['active', 'passive', 'passive', 'passive']);
        break;
      case tabs[1]:
        chTabState(['passive', 'active', 'passive', 'passive']);
        break;
      case tabs[2]:
        chTabState(['passive', 'passive', 'active', 'passive']);
        break;
      case tabs[3]:
        chTabState(['passive', 'passive', 'passive', 'active']);
        break;
      default:
        chTabState(['passive', 'passive', 'passive', 'passive']);
        break;
    }
  },[tabState, tabs, chTabState])
  return (
    <div id="toolbar">
      <span className="logo">
        <Image src="/favicon/android-chrome-512x512.png" alt="Momentum Logo" width={37.5} height={37.5} />
      </span>
      <span className="tabs">
        <Link href={tabs[0]}>
          <span id={tabState[0]} className="tab_item"><DashboardRoundedIcon/><p>Dashboard</p></span>
        </Link>
        <Link href={tabs[1]}>
          <span id={tabState[1]} className="tab_item"><FavoriteIcon /><p>Resources</p></span>
        </Link>
        <Link href={tabs[2]}>
          <span id={tabState[2]} className="tab_item"><CategoryRoundedIcon/><p>Apps</p></span>
        </Link>
        <Link href={tabs[3]}>
          <span id={tabState[3]} className="tab_item"><NotificationsIcon/><p>Notifications</p></span>
        </Link>
      </span>
      <UserPreview user_fname={props.user_fname} user_lname={props.user_lname} user_email={props.user_email}/>
    </div>
  );
}

export default Toolbar