/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"


const WithdrawalsDashboard = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const [userWithdrawals, setUserWithdrawals] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "dashboard/" + username + "/withdrawals")
            .then((result) => {
                setUserWithdrawals(result.data?.withdrawals)
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    function goBack() {
        navigate(-1)
    }


    return (
        <div className="bg-white w-screen h-screen">
            <div
                className="bg-primary w-screen h-auto flex justify-between items-center text-2xl text-white font-poppins font-extrbold p-4">
                <FaArrowLeft onClick={goBack} />  <span className="text-center">Withdrawals</span>
            </div>

            <div className="flex flex-col gap-3">
                {
                    userWithdrawals?.map(withdrawal => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Withdrawal withdrawal={withdrawal} />
                        )
                    })
                }
            </div>

        </div>
    )
}



// Withdrawal Modal
// eslint-disable-next-line react/prop-types
function Withdrawal({ withdrawal }) {

    return (
        <div className="w-full rounded-lg shadow-xl bg-white flex flex-col gap-2 p-3">
            <div className="text-xl"><strong>Withdrawal Id:</strong> #{withdrawal._id}</div>
            <div className="text-xl"><strong>Amount:</strong> ${withdrawal.amount}</div>
            <div className="text-xl"><strong>Coin:</strong> {withdrawal.coin}</div>
            <div className="text-xl"><strong>Wallet Address:</strong> {withdrawal.walletAddress}</div>
            <div
                className={
                    withdrawal.verified ?
                        "bg-green-500 p-3 text-white rounded-xl text-lg w-fit" :
                        "bg-red-500 p-3 text-white rounded-xl text-lg w-fit"}>
                {withdrawal.verified ? 'Verified' : 'Un-Verified'}
            </div>
        </div>
    )
}
export default WithdrawalsDashboard
