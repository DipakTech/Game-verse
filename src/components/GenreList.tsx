import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { data, isloading } = useGenres()

  return (
    <div>
      {isloading && <div>Loading...</div>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  )
}

export default GenreList
