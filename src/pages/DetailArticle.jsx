import { useEffect, useState } from "react"
import { Loading } from "../components/Loading";

export const DetailArticle = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const url = "https://644e5c2c4e86e9a4d8f6d279.mockapi.io/detail"
                const response = await fetch(url)
                const data = await response.json()

                setArticle(data)
            } catch (error) {
                console.log("error: " + error);
            }
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }

        loadData()

        // fetch("https://644e5c2c4e86e9a4d8f6d279.mockapi.io/detail")
        // .then(response => response.json())
        // .then((result) => {
        //     setArticle(result)
        // })
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (

                <main id="detail-atc">
                    <section id="article-detail">
                        <div class="container-fluid" id="detail">
                            {article.length === 0 ? (
                                    <span>Loading...</span>
                            ) : (
                                article.filter((data) => {
                                    const queryString = window.location.search
                                    const urlParams = new URLSearchParams(queryString)
                                    const id = urlParams.get("id")
                                    console.log(data, id);
                                    return data.articleId == id
                                }).map((data,index) => {
                                    return (
                                        <div class="row mt-4 mx-4" key={index}>
                                            <div class="col-12 rounded-3 mb-lg-4">
                                                <img src={"/"+data.img} class="img-fluid rounded-3" alt={data.title} />                                    
                                            </div>
                                            <div class="col-12 mt-2 mt-lg-5 mx-lg-auto w-50" id="main-article">
                                                <h2 class="fw-semibold">{data.title}</h2>
                                                <div class="date-article mb-3 mb-lg-4">
                                                    <i class="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                                    <p class="d-inline text-muted ms-1">{data.date}</p>
                                                </div>
                                                <p class="text-wrap">
                                                    {data.firstDetail}
                                                </p>
                                                <p class="text-wrap">
                                                    {data.secondDetail}
                                                </p>
                                                <p class="text-wrap">
                                                    {data.thirdDetail}
                                                </p>
                                                <p class="text-wrap">
                                                    {data.fourthDetail}
                                                </p>
                                            </div>
                                        </div> 
                                        // data.id == id ? (
        
                                        // ) : (
                                        //     <span>Kosong</span>
                                        // )
                                    )
                                })
                            )}
                        </div>
                    </section>
                </main>
            )}
        </>
    )
} 