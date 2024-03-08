import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

interface CharacterData {
    "id": number;
    "films": [];
    "name": string;
    "imageUrl": string;
    "sourceUrl": string;
}

export default function Detail() {
    const { id } = useParams();
    console.log(id)
    const fetchCharacterData = async () =>
        await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`)
            .then(res => res.json())
    const { isPending, isError, data, error } = useQuery<CharacterData>({ queryKey: ['Character'], queryFn: fetchCharacterData })
    if (isPending) {
        return <span>캐릭터 정보를 불러오는 중...</span>
    }
    if (isError) {
        console.log(`Error: ${error.message}`)
        return <span>캐릭터 정보를 불러오는 데 실패했습니다</span>
    }

    console.log(data)
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

