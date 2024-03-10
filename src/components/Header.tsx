import { Link } from 'react-router-dom';
import logo from '../assets/disneyLogo.png'

export default function Header() {
    return (
        <div className='w-full flex justify-center py-16'>
            <Link to="/">
                <img src={logo} alt='Disney' />
            </Link>
        </div>
    );
}

