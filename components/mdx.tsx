import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg mx-auto" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  Image: RoundedImage,
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
