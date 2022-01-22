import * as React from 'react';
import UserOptions from './UserOptions';
import Avatar from '@mui/material/Avatar';
// import Collapse from '@mui/material/Collapse';
import { useUser } from "../lib/hooks";

interface IUserPreviewProps {
  user_fname?: string,
  user_lname?: string,
  user_email?: string
}
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}


const UserPreview: React.FunctionComponent<IUserPreviewProps> = (props) => {
  const [optionsVisible, chOptionsVisible] = React.useState<boolean>(false);
  const [profile, chProfile] = React.useState<string>('/profile.png');

  let handleOptionsToggle = () => {
    chOptionsVisible(!optionsVisible);
  }

  return (
    <span onClick={handleOptionsToggle} className="user_preview">
      <Avatar alt={`${props.user_fname} ${props.user_lname}`} src={profile} />
      {/* <Avatar {...stringAvatar(`${props.user_fname} ${props.user_lname}`)} /> */}
      <span id="user_info">
        <p className="user_name">{props.user_fname} {props.user_lname}</p>
        <p className="user_email">{props.user_email}</p>
      </span>
      {/* <Collapse in={optionsVisible}></Collapse> */}
      {optionsVisible ? <UserOptions user_fname={props.user_fname} user_lname={props.user_lname} user_email={props.user_email}/> : <span></span> }
    </span>
  );
};

export default UserPreview;
