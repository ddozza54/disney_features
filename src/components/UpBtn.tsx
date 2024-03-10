import pointImg from '../assets/point.png';
export default function UpBtn() {
    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button
            onClick={MoveToTop}
            className='bg-blue-700 flex justify-center items-center w-14 h-14 rounded-full m-4 fixed bottom-1 right-1 hover:animate-bounce'>
            <img src={pointImg} alt='⬆️' className='w-8' />
        </button>
    );
}

