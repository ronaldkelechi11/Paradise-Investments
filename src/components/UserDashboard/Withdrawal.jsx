import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CancelButton from './CancelButton'
import axios from 'axios'

const Withdrawal = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const [userBalance, setUserBalance] = useState(0)
    const [showing, setShowing] = useState(false)
    const [WithdrawalAmount, setWithdrawalAmount] = useState(0)
    const [walletAddress, setWalletAddress] = useState("")
    const [coins, setCoins] = useState([
        { name: "Choose me", address: "" },
        { name: "USDT Trc 20", address: "TS5D4hJCZkuXL8w45MMqBtHPxrc4gQ1crc" },
        { name: "Bitcoin", address: "1DNmBYKPbhCUcbd5TqiRiMDNTzjDKC19Kv" },
        { name: "Litecoin", address: "0x924c316d09408d60c44f020acb9e78256341245c" },
        { name: "BNB Bep 20", address: "0x924c316d09408d60c44f020acb9e78256341245c" }
    ])

    useEffect(() => {
        // Get User Balance
        axios.get(import.meta.env.VITE_BACKEND_URL + 'dashboard/' + username)
            .then((result) => {
                setUserBalance(parseFloat(result.data.balance + result.data.profit))
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    function whineClient(e) {
        e.preventDefault();

        axios.post(import.meta.env.VITE_BACKEND_URL + 'dashboard/' + username + '/withdrawal',
            { walletAddress: walletAddress, amount: WithdrawalAmount, coin: 'Bitcoin' })
            .then((result) => {
                if (result.status == 200)
                    setShowing(!showing)
            }).catch((err) => {
                console.log(err);
                alert('Slow network connection please try again later...')
            });
    }

    function done(e) {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <div className='w-screen h-screen flex flex-col justify-center bg-[rgba(0,0,0,0.5)]'>

            <CancelButton />

            {/* Special Withdraw screen */}
            <div className={showing ? "flex items-center w-screen p-2 rounded-xl" : 'hidden'}>
                <div className="bg-white w-full p-2 roundex-xl flex flex-col gap-3">
                    <p className="text-primary text-[7rem] text-center font-billabong">Pi</p>
                    <div className="self-start text-xl font-poppins">
                        Hello <strong className='font-extrabold'>{username},</strong> <br />
                        You have requested to withdraw the sum of ${WithdrawalAmount}.<br />
                    </div>
                    <button className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl te" onClick={done}>Dashboard</button>
                </div>
            </div>


            <div className="w-screen p-2">
                <div className={showing ? "hidden" : "h-full w-full bg-white md:rounded-xl flex flex-col justify-between gap-5 p-2"}>

                    <p className='text-black text-xl text-center font-extrabold font-poppins'>Available Balance: ${userBalance}</p>

                    <div className="text-black text-xl text-center font-extrabold font-poppins">Select Withdrawal Amout:</div>
                    <form className='flex flex-col gap-3' onSubmit={whineClient}>

                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none"
                            type="number"
                            placeholder="$100"
                            max={userBalance}
                            min={100}
                            value={WithdrawalAmount}
                            required
                            onChange={(e) => { setWithdrawalAmount(e.target.value) }} />

                        <select
                            className="w-full h-[50px] p-2 font-poppins outline-none border-primary border-solid border rounded-xl" >
                            {coins.map(coin => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option value={coin.name}>
                                        {coin.name}
                                    </option>
                                );
                            })}
                        </select>

                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="text" placeholder="Wallet Address" value={walletAddress} onChange={(e) => { setWalletAddress(e.target.value) }} minLength={12} maxLength={45} required />


                        <input type="submit" className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl" value="Withdraw" />
                    </form>
                </div>
            </div>


            <div className='w-screen bg-primary fixed bottom-0 flex justify-center items-center p-3 md:p-5'>
                <div className="font-extrabold uppercase text-white text-center">Copyright © Paradise Investment, 2019.</div>
            </div>
        </div >
    )
}

export default Withdrawal

