import * as React from 'react';
import { useUser } from "../lib/hooks";
import Head from 'next/head';
import Toolbar from './toolbar';

export interface ILayoutProps {
  title: string,
  children: JSX.Element
}

export default function Layout (props: ILayoutProps) {
  const user = useUser({ redirectTo: '/login', redirectIfFound:false });
  const [profile, chProfile] = React.useState<String>('/profile.png');
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Toolbar user_email={user && user.email} user_fname="Rodolfo" user_lname="Galván"/>
      <main>
        {props.children}
      </main>
    </div>
  );
}