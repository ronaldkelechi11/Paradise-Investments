import { motion } from "framer-motion"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { WiRefresh } from "react-icons/wi";


const Login = () => {
    document.title = "Login - Paradise Investment"

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)


    function goToSignup() {
        navigate("/signup")
    }

    function login(e) {
        e.preventDefault();
        setLoading(true)
        var user = {
            email: email,
            password: password
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + "login", { user: user })
            .then((result) => {
                setLoading(false)

                if (result.status == 203) {
                    navigate("/admin")
                }
                else {
                    navigate("/dashboard/" + result.data.username)
                }
            }).catch((err) => {
                setLoading(false)

                if (err.response?.status == 401) {
                    alert("Password is not correct. Please try again.")
                    return false;
                }
                if (err.response?.status == 501) {
                    alert("Incorrect Login details")
                    return false;
                }
            });
    }
    return (
        <>
            <BackButton />
            <div className='w-screen h-screen bg-white flex flex-row items-center'>
                {/* First Section */}
                <div className="w-screen h-min flex flex-col justify-between items-center gap-10 p-3 md:p-5 md:w-[50%]">
                    <div className="flex flex-col items-center">
                        <div className="text-black uppercase text-3xl font-extrabold font-poppins">Login</div>
                        <div className="text-gray-300 text-center">Get back to earning big with us. We miss you</div>
                    </div>


                    <form className="flex flex-col w-full gap-3" onSubmit={login}>

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} minLength={2} maxLength={255} />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} minLength={8} maxLength={64} />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            type="submit"
                            className="h-[50px] w-full uppercase text-white bg-primary rounded-xl p-2  flex justify-center items-center">
                            {loading ?
                                <WiRefresh size={40} className="animate-spin" /> :
                                <p className="font-poppins">Log In</p>
                            }
                        </motion.button>
                    </form>


                    <div className="font-poppins text-center">Don&apos;t have an account? <span
                        onClick={goToSignup} className="text-primary underline cursor-pointer">Sign Up Here</span></div>
                </div>

                {/* Second Section */}
                <div className="hidden md:flex md:h-screen md:w-[50%] bg-primary bg-center bg-cover bg-no-repeat"></div>
            </div>
        </>
    )
}

export default Login
