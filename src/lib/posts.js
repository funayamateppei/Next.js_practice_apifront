import axios from './axios'

export async function getAllPostsData() {
    const response = await axios.get('/api/posts')
    const posts = await response.data
    return posts
}

export async function getAllPostIds() {
    const response = await axios.get('/api/posts')
    const posts = await response.data
    return await posts.map(post => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

export async function getPostData(id) {
    const response = await axios.get(`/api/posts/${id}`)
    const post = await response.data
    return post
}
