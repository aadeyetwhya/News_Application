import React, { useEffect, useState } from 'react'
import EachNews from './EachNews'

function NewsComponent({category}) {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = `https://newsapi.org/v2/top-headlines?country=us&apiKey=010410980f0e40479c3eef8b3e13431b&category=${category}`;
            const data = await fetch(api);
            const parseNewsData = await data.json();
            console.log(parseNewsData)
            if (parseNewsData.status == 'ok') {
                setLoading(false);

                const totalArticles = parseNewsData.totalResults;
                setArticles(parseNewsData.articles)

            }
        }
        fetchData()
    }, [category])
    return (
        <div>
            {
                loading ? <div> Loading...</div> :
                    <div className="container" style={{height:'100vh'}}>
                        <h1 style={{margin:'15px 0px 15px 0px'}}>{category[0].toUpperCase()+category.slice(1)} News</h1>
                        <div className="row" >
                            {articles.map((eachArticle, index) => {
                                return <div className="col-md-4 my-3" key={index}>
                                   <EachNews eachArticle={eachArticle}/>
                                </div>
                            })}
                        </div>
                    </div>
            }
        </div>
    )
}

export default NewsComponent
