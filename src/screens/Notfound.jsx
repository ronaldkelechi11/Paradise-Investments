
import { useEffect } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Notfound = () => {
    document.title = 'Not Found - Paradise Investment'
    return (
        <div className='bg-primary w-screen h-screen flex gap-3 flex-col justify-center items-center'>
            <FaCloudShowersHeavy size={72} color='white' />

            <div className="text-white md:text-5xl text-3xl text-center">Webpage Not Found</div>

            <p className='font-poppins text-white md:text-2xl text-lg text-center'> The webpage your seeking for doesn&apos;t seem too exist. Please </p>

            <Link to={'/'} className='bg-white text-primary p-[10px_25px] font-poppins rounded-xl '>Back to home</Link>
        </div>
    )
}

export default Notfound
