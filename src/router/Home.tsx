import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { addDefaultImg, fetchDisneyCharacters } from '../api';
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
        <div className='flex flex-wrap justify-center'>
            {data.slice(0, 100).map(character =>
                <Link to={`/character/${character.id}`} key={character.id}>
                    <div className='w-52 pb-5 px-3 flex flex-col justify-center items-center'>
                        <img src={`${character.imageUrl}`}
                            onError={addDefaultImg}
                            className='rounded-lg w-40 h-40'
                        />
                        <h4 className='text-xl pt-1 text-center'>{character.name}</h4>
                    </div>
                </Link>)}
        </div>
    );
}

