function Hero() {
    return (
        <div className="flex flex-row mt-10 mb-12">
            <div className="mr-20">
                <h1 className="font-bold text-5xl mb-10">Kian Ristori</h1>
                <p className="font-light max-w-md">Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.</p>
            </div>
            <div>
                <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1229037639917035521/JnzPWIBJ_400x400.jpg" width="150px"></img>
            </div>
        </div>
    );
  }
  
  export default Hero;