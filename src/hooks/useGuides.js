import { useState, useEffect } from 'react';
import { guides as mockGuides } from '../data/guides';

export const useGuides = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setGuides(mockGuides);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching guides:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  return { guides, loading, error };
};
