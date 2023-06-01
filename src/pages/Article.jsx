import { useEffect, useState } from "react"
import React from "react"

export const Article = () => {
    const [articles, setArticles] = useState([])
    // const imgUrl = "../assets/"

    useEffect(() => {
        fetch("https://644e5c2c4e86e9a4d8f6d279.mockapi.io/article")
        .then(response => response.json())
        .then((result) => {
            setArticles(result)
        })
    }, [])

    return (
        <>
            <main id="article">
                <div class="container-fluid mt-5" id="article-content">
                    {articles.length === 0 ? (
                        <span>Loading...</span>
                    ) : (
                        articles.map((data,index) => (
                            <div class="row mx-3 mb-4" key={index}>
                                <div class="col-lg-6">
                                    <img src={data.image} class="img-fluid my-2 me-4 rounded-3" alt={data.titleArticle} />
                                </div>
                                <div class="col-lg-6 ps-lg-5 d-flex flex-column justify-content-center">
                                    <h2 class="fw-semibold">{data.titleArticle}</h2>
                                    <p>{data.description}</p>
                                    <div class="date-article mb-4">
                                        <i class="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                        <p class="d-inline text-muted ms-1">{data.datePost}</p>
                                    </div>
                                    <div class="button-more">
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </>
    )
}