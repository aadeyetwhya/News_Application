import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import EachNews from './EachNews';
import Spinner from './Spinner';

function NewsComponent({ category }) {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=010410980f0e40479c3eef8b3e13431b&category=${category}&page=${page}&pageSize=10`;
        const response = await fetch(api);
        const data = await response.json();

        if (data.status === 'ok') {
            setArticles(prev => [...prev, ...data.articles]);
            setTotalResults(data.totalResults);
            setPage(prev => prev + 1);
        }
        setLoading(false);
    };

    useEffect(() => {
        // Reset articles when category changes
        setArticles([]);
        setPage(1);
        setTotalResults(0);
        fetchData();
        // eslint-disable-next-line
    }, [category]);

    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            <h1 style={{ margin: '15px 0px' }}>{category[0].toUpperCase() + category.slice(1)} News</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="row">
                    {articles.map((eachArticle, index) => (
                        <div className="col-md-4 my-3" key={index}>
                            <EachNews eachArticle={eachArticle} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default NewsComponent;
