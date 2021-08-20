import {useQuery} from 'react-query'
import Planet from "./Planet";
import {useState} from "react";

async function fetchPlanets(key, greeting, page) {
  console.log(greeting)
  const res = await fetch(`https://swapi.dev/api/planets?page=${page}`)
  return res.json()
}

export default function Planets() {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(
    ['planets', 'hello ninjas', page],
    ({queryKey}) => fetchPlanets(...queryKey),
    {
      staleTime: 0,
      // cacheTime: 10,
      onSuccess: () => console.log('data fetched with no problemo')
    })
  console.log(data)

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

      { status === 'loading' && (<div>Loading data...</div>)}
      { status === 'error' && (<div>Error fetching data</div>)}
      { status === 'success' && (
        <div>
          {data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}
        </div>
      )}
    </div>
  )
}