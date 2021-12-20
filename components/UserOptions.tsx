import * as React from 'react';
import UserPreview from './UserPreview';
import Link from 'next/link';
import { useState } from 'react-transition-group/node_modules/@types/react';

interface IUserOptionsProps {
  user_fname?: string,
  user_lname?: string,
  user_email?: string,
  user_image?: any,
}

const UserOptions: React.FunctionComponent<IUserOptionsProps> = (props) => {
  return (
    <span className={`user_options`}>
      <UserPreview user_fname={props.user_fname} user_lname={props.user_lname} user_email={props.user_email} />
      <Link href="/api/logout">
        <a className="logout">Logout</a>
      </Link>
    </span>
  );
};

export default UserOptions;
