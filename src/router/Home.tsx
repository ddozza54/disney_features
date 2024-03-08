import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchDisneyCharacters } from '../api';
import { Character } from '../types/types';

export default function Home() {
    const { isPending, isError, data, error } =
        useQuery<Character[]>({ queryKey: ['characters'], queryFn: fetchDisneyCharacters })

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

