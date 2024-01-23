import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
  const { games, error } = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding='10px'
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        spacing={5}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
