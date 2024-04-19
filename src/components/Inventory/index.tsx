import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import PaginatedApi from '../Table'

const index = () => {
  return (
    <Flex justifyContent="center" my={'50px'} height="70vh">
      <Box w={'80%'}>
        <PaginatedApi headers={["DC","Capacity","Utilization Percentage"]} body={{a:["SL7L","8000","70%"],b:['SL7K','8000','90%']}}/>
      </Box>
    </Flex>
  )
}

export default index
