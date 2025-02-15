import axios from "axios";
import { useEffect, useState } from "react";

const useStarredRepos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const apiURL = `https://api.github.com/users/luan-cardoso/starred`;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(apiURL);
        setRepos(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRepos();
  }, [apiURL]);

  return { repos, error };
};

export default useStarredRepos;
