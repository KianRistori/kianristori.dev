import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import LoginGitHub from "components/LoginGitHub"
import { cookies } from "next/headers"

export const metadata = {
	title: "Guestbook",
	description: "Engage with my blog's Guest Book and share your thoughts! Join the community, leave comments, and contribute to the conversation. Your feedback matters!"
};

export default async function Guestbook() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();
  const { data: { user } } = await supabase.auth.getUser()
  const { data: messages } = await supabase.from('message').select()
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-3xl mb-5 animate-in">write something in my guestbook</h1>
      <LoginGitHub session={data.session} user={user}/>
      {messages?.sort((a, b) => b.id - a.id).map((message, i) => 
        <div key={message.id} className="flex text-sm animate-in" style={{ "--index": i + 2 } as React.CSSProperties}>
          <h1 className=" text-gray-300">{message.name}:&nbsp;</h1>
          <p>{message.text}</p>
        </div>
      )}
    </div>
  )
}
