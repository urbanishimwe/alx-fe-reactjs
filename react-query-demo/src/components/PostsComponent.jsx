import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data, isError, isLoading } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    {item.title} <br/>
                    {item.body}
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;