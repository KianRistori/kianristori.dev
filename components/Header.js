function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl"><a href="/">Kian Blog</a></h1>
      <div>
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/KianRistori"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
