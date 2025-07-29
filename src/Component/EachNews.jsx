import React from 'react'
import { useSelector } from 'react-redux'
import './EachNews.css'

function EachNews({ eachArticle }) {
    const lightMode = useSelector(state => state.modeStore.lightMode)
    return (
        <div className="card h-100" style={{ backgroundColor: !lightMode && '#2B3035'}}>
            <img style={{ height: '170px' }} src={eachArticle.urlToImage || "https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ color: !lightMode && "white" }}>
                    {eachArticle.title && eachArticle.title.slice(0, 70)}...
                </h5>

                <p className="card-text" style={{ color: !lightMode && "white" }}>
                    {(eachArticle.description ? eachArticle.description.slice(0, 89) : eachArticle.content ? eachArticle.content.slice(0, 94) : "Click to see news") + "...."}
                </p>

                <p style={{ backgroundColor: "#404040", color: "white", display: 'inline-block', padding: '3px 8px 3px 8px', borderRadius: '20px' }} className="card-text">
                    {eachArticle.author || "Unknown"}
                </p><br />

                <a href="#" className="btn btn-primary mt-1 clickSeeNews" >
                    See News
                </a>

                <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                    style={{ left: eachArticle.source.name && eachArticle.source.name.length < 7 ? "2px" : (eachArticle.source.name.length > 11 ? '46px' : '28px') }}>
                    {eachArticle.source.name || "Source"}
                    <span class="visually-hidden">
                        Unread messages
                    </span>
                </span>

            </div>
        </div>
    )
}

export default EachNews
