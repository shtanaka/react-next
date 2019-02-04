import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const Index = () => (
  <Layout>
    <p>List of posts</p>
    <ul>
      <PostLink id="1" title="Post 1"></PostLink>
      <PostLink id="2" title="Post 2"></PostLink>
      <PostLink id="3" title="Post 3"></PostLink>
    </ul>
  </Layout>
)

export default Index
