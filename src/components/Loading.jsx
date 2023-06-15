import Lottie from "lottie-react"
import loading from "../assets/loading.json"

export const Loading = () => {
    return (
        <>
            <div className="container" id="loading">
                <div className="row d-flex justify-content-center">
                    <Lottie className="loading" animationData={loading} style={{width: "550px", height: "550px"}} loop={true} autoPlay={true}  />
                </div>
            </div>
        </>
    )
}