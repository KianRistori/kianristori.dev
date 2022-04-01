import Gradient from 'rgt'

function Hero() {
    return (
        <div className="flex md:flex-row mt-20 mb-12 flex-col-reverse">
            <div className="mr-20">
                <h1 className="font-bold text-5xl mb-10">
                    <Gradient dir="left-to-right" from="#FBDA61" to="#FF5ACD" >
                        Hi, I'm Kian Ristori
                    </Gradient>
                </h1>
                <p className="font-light max-w-md text-gray-400">I'm Full Stack Web Developer based in Italy. Welcome to my blog</p>
                <a href='about'>
                    <button type="button" class="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">More about me 🧑🏻‍💻</button>
                </a>
            </div>
            <div>
                <img className="rounded-full mb-10 right-0 " src="https://pbs.twimg.com/profile_images/1229037639917035521/JnzPWIBJ_400x400.jpg" width="150px"></img>
            </div>
        </div>
    );
  }
  
  export default Hero;