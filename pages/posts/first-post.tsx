import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        {/* Link 태그를 이용하여 무조건 ROUTE 기능 + className 이용할 땐,
         Link 태그에 말고 a 태그에 적용 */}
        <Link href="/">
          <a className="foo">Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
