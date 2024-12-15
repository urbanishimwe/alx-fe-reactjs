// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the correct function

const Search = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userList = await fetchUserData(query); // Use fetchGitHubUsers here
      setUsers(userList);
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub User"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error} Looks like we can’t find any users.</p>}

      {users.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Search Results:</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border p-4 rounded mb-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <h3 className="text-xl font-bold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View GitHub Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;