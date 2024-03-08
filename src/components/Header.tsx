import { Link } from 'react-router-dom';
import logo from '../assets/disneyLogo.png'

export default function Header() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt='Disney' />
            </Link>
        </div>
    );
}

