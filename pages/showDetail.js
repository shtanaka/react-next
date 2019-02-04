import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'

const Post = withRouter(
  (props) => {
    console.log(props.show);
    return (
      <Layout>
        <div>{props.show.name}</div>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      </Layout>
    )
  }
)

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post