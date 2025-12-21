import { useState, useEffect } from 'react';
import { experts as mockExperts } from '../data/experts';

export const useExperts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setExperts(mockExperts);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching experts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  return { experts, loading, error };
};
