import { useEffect, useState } from "react"
import React from "react"
import "../css/article.css";
import { Link } from "react-router-dom"

export const Article = () => {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("");
    // const imgUrl = "../assets/"

    useEffect(() => {
        fetch("https://644e5c2c4e86e9a4d8f6d279.mockapi.io/article")
        .then(response => response.json())
        .then((result) => {
            setArticles(result)
        })
    }, [])

    // Search events
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredArticles = articles.filter((e) => {
    return e.titleArticle.toLowerCase().includes(search.toLowerCase());
  });

    return (
        <>
            <main id="article">
                <div class="container-fluid mt-5" id="article-content">
                    <div className="row mx-3 mb-4 d-flex justify-content-center align-items-center">
                        <div className="col-lg-8 title-articles">
                            <h2>Blog, Postingan, dan Artikel</h2>
                            <p className="mb-3">
                                Blog, Postingan, dan Artikel yang mungkin relevan untuk Anda baca
                            </p>
                        </div>
                        <div className="col-lg-4 search-articles">
                            <div className="input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg py-lg-2 py-1" 
                                    name="search"
                                    id="search"
                                    placeholder="Search"
                                    aria-label="search articles"
                                    autoComplete="off"
                                    value={search}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                    </div>
                    {filteredArticles.length === 0 ? (
                        <span>Loading...</span>
                    ) : (
                        filteredArticles.map((data,index) => (
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
                                        <Link to={`./detailArticle/:${data.id}?id=${data.id}`} 
                                            class="btn btn-primary border-0 px-3 py-2" 
                                            id="btnSelengkapnya">
                                                Selengkapnya
                                        </Link>
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