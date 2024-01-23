import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image
        src='https://nepsaymart.com.au/static/media/Logo.2a984d15afc6ac4e5d16.png'
        boxSize='60px'
      />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
