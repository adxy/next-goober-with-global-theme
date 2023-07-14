import Head from "next/head";

import { styled } from "goober";

const Hello = styled("h1")`
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Template with Goober</title>
        <meta name="description" content="Next template with Goober" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hello>Hello, World!</Hello>
      </main>
    </>
  );
}
