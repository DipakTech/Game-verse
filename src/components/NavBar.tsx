import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image
        src='https://nepsaymart.com.au/static/media/Logo.2a984d15afc6ac4e5d16.png'
        boxSize='60px'
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
