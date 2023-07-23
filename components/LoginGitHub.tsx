"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginGitHub(props: {session: any, user: any}) {
  const [message, setMessage] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();
  
  async function signInOauth() {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    router.refresh();
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  async function sendMessage() {
    await supabase.from('message').insert({ name: props.user.user_metadata.user_name, text: message })
  }

  function noSession() {
    return (
        <button onClick={signInOauth} type="button" className="animate-in text-white bg-[#24292F] focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2" style={{ "--index": 1 } as React.CSSProperties}>
          <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
          </svg>
          Sign in with Github
        </button>
    )
  }

  function Session() {
    return (
      <div>
        <form onSubmit={sendMessage}>
          <div className="relative animate-in" style={{ "--index": 1 } as React.CSSProperties}>
            <input onChange={(e) => setMessage(e.target.value)} type="search" id="search" className="block w-full p-4 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none" placeholder="Your message..." required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Send</button>
          </div>
        </form>
        <button className="text-sm animate-in" style={{ "--index": 1 } as React.CSSProperties} onClick={signOut}>SignOut</button>
      </div>
    )
  }

  return (
    <div>
      {props.session == null ? noSession() : Session()}
    </div>
  )
}
