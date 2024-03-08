import { useQuery } from '@tanstack/react-query';

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

    console.log(data)
    return (
        <div>
            Home
            Success!
            {data.map(character => <div key={character.id}>
                <img src={`${character.imageUrl}`} />
                <h4>{character.name}</h4>
            </div>)}
        </div>
    );
}

