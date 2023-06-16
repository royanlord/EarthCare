import { useContext, useEffect, useState } from "react"
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { LoginContext } from "../context/LoginProvider";
import Footer from "../components/Footer"
export const DetailArticle = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {isLogin, setIsLogin} = useContext(LoginContext)

    if (isLogin) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "white";
    }

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
            document.title = "Loading.."
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
            <Navbar />
            {isLoading ? (
                <Loading />
            ) : (
            <div>
                <main id="detail-atc">
                    <section id="article-detail">
                        <div className="container-fluid" id="detail">
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
                                    document.title = `${data.title}`
                                    return (
                                        <div className="row mt-4 mx-4" key={index}>
                                            <div className="col-12 rounded-3 mb-lg-4">
                                                <img src={"/"+data.img} className="img-fluid rounded-3" alt={data.title} />                                    
                                            </div>
                                            <div className="col-12 mt-2 mt-lg-5 mx-lg-auto w-50" id="main-article">
                                                <h2 className="fw-semibold">{data.title}</h2>
                                                <div className="date-article mb-3 mb-lg-4">
                                                    <i className="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                                    <p className="d-inline text-muted ms-1">{data.date}</p>
                                                </div>
                                                <p className="text-wrap">
                                                    {data.firstDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.secondDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.thirdDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.fourthDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.fifthDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.sixthDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.seventhDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.eighthDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.ninthDetail}
                                                </p>
                                                <p className="text-wrap">
                                                    {data.tenthDetail}
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
                    <Footer/>
                </div>
            )}
        </>
    )
} 