import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface Character {
    id: number;
    name: string;
    imageUrl: string;
}
export default function Home() {
    const fetchDisneyCharacters = async () =>
        await fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then(res => res.json()).then(data => data.slice(100));
    const { isPending, isError, data, error } = useQuery<Character[]>({ queryKey: ['characters'], queryFn: fetchDisneyCharacters })

    if (isPending) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }
    return (
        <div>
            Home
            {data.slice(0, 100).map(character => <Link to={`/character/${character.id}`}>
                <div key={character.id}>
                    <img src={`${character.imageUrl}`} />
                    <h4>{character.name}</h4>
                </div>
            </Link>)}
        </div>
    );
}

