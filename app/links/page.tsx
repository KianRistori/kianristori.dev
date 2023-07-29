import Image from "next/image";
import LinkList from "components/LinkList";

export default function Links() {
  return (
      <div className="flex flex-col gap-16 mb-40">
        <div className="flex flex-col gap-8 animate-in">
          <Image
            src={"/logo.webp"}
            width={100}
            height={100}
            alt="avatar"
            className="rounded-full bg-secondary mx-auto animate-in"
          />
          <div className="space-y-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
            <h1 className="text-2xl font-bold tracking-tight text-center">Kian Ristori</h1>
            <p className="max-w-sm text-gray-300 mx-auto text-center">Stay connect with me @kianristori</p>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-1 gap-2 lg:gap-3 animated-list animate-in" style={{ "--index": 2 } as React.CSSProperties}>
          <LinkList />
        </div>
    </div>
  );
}
