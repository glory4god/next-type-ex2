import Link from 'next/link';
import Head from 'next/head';
import { getAllIds, getData } from 'lib/lists';

export default function List({ data }: any) {
  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      {data.id}
      <br />
      {data.name}
      <br />
      <Link href="/dynamic">
        <a>go Home</a>
      </Link>
    </div>
  );
}

// dynamic path 설정 방법
export async function getStaticPaths() {
  const paths = getAllIds();

  return {
    paths,
    fallback: false, // 404 페이지를 호출하냐 안하냐의 여부 문제도 있음!
  };
}

// 외부로 data를 먼저 끌어오는 경우에 이용 방법
export async function getStaticProps({ params }: any) {
  const data = getData(params.id);
  return {
    props: {
      data,
    },
  };
}
