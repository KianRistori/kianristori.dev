import { useMDXComponent } from 'next-contentlayer/hooks';

function RoundedImage(props) {
  return (
    <div>
      <img alt={props.alt} className="rounded-lg mx-auto" {...props} />
      <p className="mt-2 text-sm text-center text-gray-400">{props.caption}</p>
    </div>
  );
}

function Callout(props) {
  return (
    <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex text-2xl items-center w-5 mr-5">{props.emoji}</div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}

const components = {
  Img: RoundedImage,
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
