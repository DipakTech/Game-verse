import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { genres, error, isloading } = useGenres()

  console.log(genres)
  return (
    <div>
      {isloading && <div>Loading...</div>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  )
}

export default GenreList
