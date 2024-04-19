import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const handleSeasonClick = (season: string) => {
    router.push(`/season/${season}?type=${season}`);
  };

  return (
    <Box h={'60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <HStack spacing={6}>
        <Button size={'lg'} px={8} colorScheme='gray' mx={'50px'} onClick={() => handleSeasonClick('Spring Summer')}>Spring Summer</Button>
        <Button size={'lg'} px={8} colorScheme='gray' mx={'50px'} onClick={() => handleSeasonClick('Autumn Winter')}>Autumn Winter</Button>
      </HStack>
    </Box>
  )
}

export default Index;
