import {useQuery} from 'react-query'
import {useState} from "react";

async function fetchThings(key, page) {
  const res = await fetch(`https://swapi.dev/api/${key}?page=${page}`)
  return res.json()
}

/**
 * Turns the first letter of string to uppercase
 *
 * e.g. 'hello' -> 'Hello'
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Things({name, Child}) {
  const [page, setPage] = useState(1)
  const {data, status} = useQuery(
    [name, page],
    ({queryKey}) => fetchThings(...queryKey),
    {
      staleTime: 0,
      keepPreviousData: true
    })

  return (
    <div>
      <h2>{capitalize(name)}</h2>

      {status === 'loading' && (<div>Loading data...</div>)}
      {status === 'error' && (<div>Error fetching data</div>)}
      {status === 'success' && (
        <>
          <button onClick={() => setPage(old => data.previous ? old - 1 : 1)}
                  disabled={!data.previous}>
            Previous page
          </button>
          <span>{page}</span>
          <button onClick={() => setPage(old => data.next ? old + 1 : old)}
                  disabled={!data.next}>
            Next page
          </button>
          <div>
            {data.results.map(it => <Child key={it.name} data={it}/>)}
          </div>
        </>
      )}
    </div>
  )
}