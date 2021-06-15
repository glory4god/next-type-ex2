import Link from 'next/link';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Learn Next.js!</h1>
        <h2>
          <li>
            Read{' '}
            <Link href="/posts/first-post">
              <a>this page!</a>
            </Link>
          </li>
          <li>
            <Link href="/introduce">
              <a>introduce!</a>
            </Link>
          </li>
        </h2>
      </div>
    </>
  );
};

export default HomePage;
