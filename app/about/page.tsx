// app/about/page.tsx
"use client";

import { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function About() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = () => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Post[] = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };

  return (
    <>
      <h1>About Us Page</h1>
      <button onClick={loadData}>
        {loading ? 'Loading...' : 'Load Content from External API'}
      </button>
      {error && <p>Error: {error}</p>}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}
