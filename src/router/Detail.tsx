import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addDefaultImg, fetchCharacterData } from '../api';
import { CharacterData } from '../types/types';
import pointImg from '../assets/point.png';

export default function Detail() {
    const { id } = useParams();
    const { isPending, isError, data, error } =
        useQuery<CharacterData>({ queryKey: ['Character'], queryFn: () => fetchCharacterData(id) })
    const navigate = useNavigate();

    if (isPending) {
        return <span>캐릭터 정보를 불러오는 중...</span>
    }
    if (isError) {
        console.log(`Error: ${error.message}`)
        return <span>캐릭터 정보를 불러오는 데 실패했습니다</span>
    }
    return (
        <div className=' p-10'>
            <button onClick={() => { navigate(-1) }}>
                <img src={pointImg} className='-rotate-90 w-10' />
            </button>
            <div key={data.id}
                className='flex'>
                <img src={`${data.imageUrl}`}
                    onError={addDefaultImg}
                    className='w-[30rem]' />
                <div className='pl-5'>
                    <h2 className='text-4xl font-bold pb-10' >{data.name}</h2>
                    <h4 className='text-xl font-bold'>{data.name}'s Films</h4>
                    <ul className='py-2 pb-10'>
                        {data.films.map((film, i) => <li key={`${i}${film}`}>- {film}</li>)}
                    </ul>
                    <Link to={`${data.sourceUrl}`} target='_blank'
                        className='text-blue-600'
                    >More Infomation 👉</Link>
                </div>
            </div>
        </div>
    );
}

