import React, { useEffect, useState } from "react";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=010410980f0e40479c3eef8b3e13431b";
        const response = await fetch(api);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setNewsData(data.articles);  // Assuming the API returns articles
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);  // Set error if something goes wrong
        setLoading(false);
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Top News Headlines</h1>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsComponent;
