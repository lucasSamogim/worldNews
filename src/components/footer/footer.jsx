import { useNavigate } from 'react-router-dom';
import logo from '../../assets/WORLD.png'

function Footer() {

    const navigate = useNavigate();

    return (
        <footer className="w-full h-[200px] bg-sky-950 text-white flex flex-col items-center justify-around">
            <img alt="Logo" src={logo} className='w-[150px] cursor-pointer' onClick={() => navigate('/')} />
            <span className='pb-6'>Developed by <a href='https://github.com/lucasSamogim' target='_blank' className='hover:underline' rel="noreferrer">Lucas Samogim Pereira</a></span>
        </footer>
    );  
};

export default Footer;