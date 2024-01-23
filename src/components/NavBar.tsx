import { HStack, Image, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack>
      <Image
        src='https://nepsaymart.com.au/static/media/Logo.2a984d15afc6ac4e5d16.png'
        boxSize='60px'
      />
      <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar
