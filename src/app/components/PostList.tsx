import { useGetPostsQuery } from '../services/jsonPlaceholderApi';

const PostsList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery({}); // objeto vazio

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Erro ao buscar posts.</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
