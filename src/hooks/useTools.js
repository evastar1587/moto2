import { useState, useEffect } from 'react';
import { tools as mockTools } from '../data/tools';

export const useTools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setTools(mockTools);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching tools:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  return { tools, loading, error };
};
