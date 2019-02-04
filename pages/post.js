import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = withRouter(
  (props) => (
    <Layout>
      {props.router.query.title}
      <p>This is the post content</p>
    </Layout>
  )
)

export default Post