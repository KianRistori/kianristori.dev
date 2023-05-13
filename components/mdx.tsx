/* eslint-disable @next/next/no-img-element */
import { useMDXComponent } from 'next-contentlayer/hooks';

function RoundedImage(props: {altProps: string, caption: string}) {
  return (
    <div>
      <img alt={props.altProps} className="rounded-lg mx-auto hover:scale-105 transition-all duration-300" {...props} />
      <p className="mt-2 text-sm text-center text-gray-400">{props.caption}</p>
    </div>
  );
}

function Callout(props: {emoji: string, children: string}) {
  return (
    <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex text-2xl items-center w-5 mr-5">{props.emoji}</div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}

function CustomLink(props: {name: string, link: string})
{
  return (
    <a className="text-violet-500 font-bold no-underline hover:text-violet-400 transition-all duration-200" href={props.link}>{props.name}</a>
  )
}

const components = {
  Img: RoundedImage,
  Link: CustomLink,
  Callout,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-invert">
      <Component components={{...components}} />
    </article>
  );
}
