import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  return (
    <Box h={'60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <HStack spacing={6}>
        <Button size={'lg'} px={8} colorScheme='gray' mx={'50px'}>Spring Summer</Button>
        <Button size={'lg'} px={8} colorScheme='gray' mx={'50px'}>Autumn Winter</Button>
      </HStack>
    </Box>
  )
}

export default index;
