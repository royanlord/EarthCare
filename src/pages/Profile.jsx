import { FaUser } from "react-icons/fa"
import "../css/profile.css"
import { UserContext } from "../context/UserProvider"
import { useContext, useState } from "react"

export const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    const [emailProfile, setEmailProfile] = useState("")
    const [fullnameProfile, setFullnameProfile] = useState("")
    const [addressProfile, setAddressProfile] = useState("")

    return (
        <>
            <main id="profile">
                <div className="container bg-danger">
                    <h1>My Profile</h1>
                    <div className="row">
                        <div className="col-lg-5">
                            <h2>picture</h2>
                        </div>
                        <div className="col-lg-7 bg-primary">
                            <h2>Personal Information</h2>
                            <form 
                                name="profile-form" 
                                class="profile-form text-white pe-lg-5"
                                onSubmit={handleSubmitProfile}
                            >
                                <div class="mb-2">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        class="form-control form-control-lg shadow-none" 
                                        id="emailProfile" 
                                        placeholder="Masukkan email" 
                                        value={emailProfile}
                                        // onChange={e => {
                                        //     setInputEmail(e.target.value)
                                        // }}
                                    />
                                    
                                </div>
                                <div class="mb-2">
                                    <label htmlFor="fullname" class="form-label">Nama Lengkap</label>
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg shadow-none" 
                                        id="fullnameProfile"
                                        placeholder="Masukkan nama lengkap" 
                                        value={fullnameProfile}
                                        // onChange={e => {
                                        //     setInputFullname(e.target.value)
                                        // }}
                                    />
                                    
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="address" class="form-label">Alamat</label>
                                    <textarea 
                                        class="form-control form-control-lg shadow-none" 
                                        id="addressProfile"   
                                        rows="6" 
                                        style={{resize: "none"}}
                                        placeholder="Masukan alamat anda"
                                        value={addressProfile}
                                        // onChange={e => {
                                        //     setInputMessage(e.target.value)
                                        // }}
                                    ></textarea>
                                    
                                </div>
                                <div class="mb-3">
                                    <button type="submit" id="btnSend" class="btn btn-lg w-100 btn-primary border-0">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}