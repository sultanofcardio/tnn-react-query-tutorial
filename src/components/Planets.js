import {useQuery} from 'react-query'
import Planet from "./Planet";

async function fetchPlanets() {
  const res = await fetch('https://swapi.dev/api/planets/')
  return res.json()
}

export default function Planets() {

  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 0,
    // cacheTime: 10,
    onSuccess: () => console.log('data fetched with no problemo')
  })
  console.log(data)

  return (
      <div>
        <h2>Planets</h2>
        { status === 'loading' && (<div>Loading data...</div>)}
        { status === 'error' && (<div>Error fetching data</div>)}
        { status === 'success' && (
            <div>
              {data.results.map(planet => <Planet key={planet.name} planet={planet}/> )}
            </div>
        )}
      </div>
  )
}