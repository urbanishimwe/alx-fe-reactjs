import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const [refresh, setRefresh] = useState(false)
    const { data, error, isLoading, isError } = useQuery('fetchPosts', fetchPosts,
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            cacheTime: 1e9,
            staleTime: 129
        }
    );

    console.log("re-rendered")

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (isError) return <di> Fetching Data error</di>

    return (
        <div>
            <button onClick={() => setRefresh(!refresh)}> Refresh Data </button> <br />
            {data.map(item => (
                <div key={item.id}>
                    {item.title} <br />
                    {item.body}
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;