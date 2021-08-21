export default function Person({data}) {
  return (
      <div className='card'>
        <h3>{data.name}</h3>
        <p>Gender - {data.gender}</p>
        <p>Birth Year - {data.birth_year}</p>
      </div>
  )
}