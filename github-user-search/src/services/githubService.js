import axios from 'axios';

export const fetchUserData = async (username) => {
  const apiKey = import.meta.env.REACT_APP_GITHUB_API_KEY;  // Use environment variable

  try {
    const response = await axios.get(`'https://api.github.com/users/'${username}`, {
      headers: {
        Authorization: `token ${apiKey}`, // Use your GitHub API key
      },
    });
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};