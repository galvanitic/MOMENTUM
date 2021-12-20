import * as React from 'react';
import Router from 'next/router';
import { useUser } from "../lib/hooks";
import Form from './form';

import { Magic } from "magic-sdk";

export interface IAuthenticateProps {
}

function Authenticate (props: IAuthenticateProps) {
  useUser({ redirectTo: './', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = React.useState('');

  async function handleSubmit(e:any) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      email: e.currentTarget.email.value + "@pelotonu.org",
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      })
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(body),
      })
      console.log(res);
      // If successful email auth
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error:any) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <div className="login">
      <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
    </div>
  );
}

export default Authenticate;