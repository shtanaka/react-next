import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = (props) => {
  return (
    <Layout>
      {props.shows.map(({ score, show }) => {
        return (
          <div key={show.id}>
            <span>{Number(score).toFixed(1)} - </span>
            <Link as={`/show/${show.id}`} href={`/showDetail?id=${show.id}`}>
              <a>
                {show.name}
              </a>
            </Link>
          </div>
        );
      })}
      <p>List of posts</p>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return {
    shows: data
  };
};

export default Index
