
export async function getPostsData() {
	const res = await fetch('http://jsonplaceholder.typicode.com/posts')
	const allPostsData = await res.json()
	return allPostsData
}

export async function getAllPostIds() {
	const res = await fetch('http://jsonplaceholder.typicode.com/posts')
	const allPostsData = await res.json()
	console.log(allPostsData);
	return allPostsData.map(post => {
		return {
			params: {
				id: post.id.toString()
			}
		}
	})
}

export async function getPostData(id) { 
	const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
	const post = await res.json()
	console.log(post);
	return {
    id,
    ...post
  }
}