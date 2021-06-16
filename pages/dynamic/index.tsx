import Link from 'next/link';
import { getAllIds, getData } from 'lib/lists';

export default function Home({ idList }: any) {
  return (
    <div>
      목록
      {idList.map((arr: string) => {
        return (
          <li key={arr}>
            <Link href={`/dynamic/${arr}`}>{arr}</Link>
          </li>
        );
      })}
      <Link href="/">go Home</Link>
      {/* {idList.map((arr: string, key: number) => {
        return (
          <li key={key}>
            <Link href={`dynamic/${arr}`}></Link>
            arr
          </li>
        );
      })} */}
    </div>
  );
}

export async function getStaticProps() {
  const paths = getAllIds();
  const idList: Array<string> = paths.map((arr: { params: any }) => {
    return arr.params.id;
  });

  return {
    props: {
      idList,
    },
  };
}
