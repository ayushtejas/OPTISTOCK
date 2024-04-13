import React from 'react'
import PaginatedApi from '../breadcrumb/Table/table'
import { Box, Flex } from '@chakra-ui/react'

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
