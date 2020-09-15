
export default function findPost(props) {
    const postId = props.match.params.id
    const post = props.posts.posts.find(post => post.id === postId)
    return [post, postId]
}