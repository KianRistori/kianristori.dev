import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const font = fetch(
	new URL('../../public/fonts/Epilogue-Medium.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://kianristori.dev/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 185,
            marginRight: 185,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Epilogue',
            letterSpacing: '-0.02em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '150px',
            whiteSpace: 'pre-wrap',
          }}
        >
			{postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
	  fonts: [
        {
          name: 'Epilogue',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
