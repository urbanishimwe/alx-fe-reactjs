import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, isError } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (isError) return <di> Fetching Data error</di>

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