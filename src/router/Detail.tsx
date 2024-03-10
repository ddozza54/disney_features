import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchCharacterData } from '../api';
import { CharacterData } from '../types/types';

export default function Detail() {
    const { id } = useParams();
    const { isPending, isError, data, error } =
        useQuery<CharacterData>({ queryKey: ['Character'], queryFn: () => fetchCharacterData(id) })
    if (isPending) {
        return <span>캐릭터 정보를 불러오는 중...</span>
    }
    if (isError) {
        console.log(`Error: ${error.message}`)
        return <span>캐릭터 정보를 불러오는 데 실패했습니다</span>
    }

    return (
        <div key={data.id}>
            <img src={`${data.imageUrl}`} />
            <h2>{data.name}</h2>
            <h4>Films</h4>
            <ul>
                {data.films.map(film => <li>{film}</li>)}
            </ul>
            <Link to={`${data.sourceUrl}`} target='_blank' >More Infomation</Link>
        </div>
    );
}

