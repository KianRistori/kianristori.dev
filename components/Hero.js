import Image from "next/image";

function Hero() {
    return (
        <div className="flex md:flex-row mt-10 md:mt-20 mb-10 flex-col-reverse">
            <div className="mr-20">
                <h1 className="font-bold text-5xl mb-5">Hi 👋🏻 I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">Kian</span></h1>
                <p className="font-IBM max-w-md text-gray-400">I'm Full Stack Web Developer based in Italy. Welcome to my Blog</p>
                <a href='about'>
                    <button type="button" className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition duration-500 hover:scale-125">More about me 🧑🏻‍💻</button>
                </a>
            </div>
            <div className="mb-10" >
                <Image className="rounded-full" src="/logo.webp" alt="profile-img" width={150} height={150}></Image>
            </div>
        </div>
    );
  }
  
  export default Hero;