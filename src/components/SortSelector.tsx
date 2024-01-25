import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevence
      </MenuButton>
      <MenuList>
        <MenuItem> Relevence</MenuItem>
        <MenuItem> Date added</MenuItem>
        <MenuItem> Name</MenuItem>
        <MenuItem> Release Dates</MenuItem>
        <MenuItem>Average Rating </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector
