import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import PaginatedApi from '../Table'

const index = () => {
  return (
    <Flex justifyContent="center" my={'50px'} height="70vh">
      <Box w={'80%'}>
        <PaginatedApi />
      </Box>
    </Flex>
  )
}

export default index
