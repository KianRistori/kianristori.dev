function Hero() {
    return (
        <div className="flex md:flex-row mt-20 mb-12 flex-col-reverse">
            <div className="mr-20">
                <h1 className="font-bold text-5xl mb-10">Hi, I'm Kian Ristori</h1>
                <p className="font-light max-w-md text-gray-400">I'm Full Stack Web Developer based in Italy. Welcome to my blog</p>
            </div>
            <div>
                <img className="rounded-full mb-10 grayscale right-0 " src="https://pbs.twimg.com/profile_images/1229037639917035521/JnzPWIBJ_400x400.jpg" width="150px"></img>
            </div>
        </div>
    );
  }
  
  export default Hero;