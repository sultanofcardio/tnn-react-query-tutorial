export default function Planet({data}) {
  return (
      <div className='card'>
        <h3>{data.name}</h3>
        <p>Population - {data.population}</p>
        <p>Terrain - {data.terrain}</p>
      </div>
  )
}