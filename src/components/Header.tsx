import { Link } from 'react-router-dom';
import logo from '../assets/disneyLogo.png'

export default function Header() {
    return (
        <div className='w-full flex justify-center mb-[24rem] xl:mb-[29rem]'>
            <Link to="/">
                <div className='w-48 h-32 p-16 rounded-full hover:animate-ping hover:bg-white xl:w-56 xl:h-4'></div>
            </Link>
        </div>
    );
}

