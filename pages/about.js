import Head from "next/head"

export default function About() {
  return (
    <div className="md:mt-20 mt-5 mb-10">
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="About"/>
      </Head>
      <h1 className="font-bold text-5xl mb-14 ">About Me</h1>
      <h2 className="font-bold text-2xl mb-5">Bio</h2>
      <h3 className="font-bold text-xl mb-5">Education</h3>
      <p className=" text-gray-500 mb-10">I.S.I.S Enirco Fermi Bibbiena Italy</p>
      <h3 className="font-bold text-xl mb-5">Work Experience</h3>
      <p className=" text-gray-500 mb-10">Radio Italia 5 Poppi Italy</p>
      <h3 className="font-bold text-xl mb-5">Headshots</h3>
      <div className="grid gap-5 grid-cols-2">
        <img className="rounded-xl" src="/logo.webp" width={300} alt="profile-picture"></img>
        <img className="rounded-xl" src="/logo2.webp" width={300} alt="profile-picture"></img>
      </div>
    </div>
  );
}