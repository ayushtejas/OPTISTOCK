import { Box, Text, Heading, Grid, GridItem, Img, Flex } from '@chakra-ui/react'
import React from 'react'

const index = () => {

    function redirect(name:string) {
        console.log(name)
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url('/static/image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(15, 0, 130,0.2)',
                    backdropFilter: 'blur(3px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                 <Box
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Use a semi-transparent white background
            borderRadius: 'lg',
            boxShadow: 'xl',
            p: 8,
            maxWidth: '80vw',
            textAlign: 'center',
        }}
    >
        <Heading size="xl" color="blue.500" mb={4}>
            OPTISTOCK
        </Heading>
        <Text color="gray.700" fontSize="lg" mb={8}>
            WHAT CAN WE HELP YOU WITH TODAY
        </Text>
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                justifyContent="center"
                alignItems="center"
            >
                {['Inventory', 'Charts', 'Production Forecast', 'Sales', 'Stores'].map(item => (
                    <Flex
                    key={item}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    h="full"
                    cursor="pointer"
                    transition="all 0.3s"
                    _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: 'xl',
                        bg:'gray.700'
                    }}
                    onClick={() => {
                        
                        location.href = `/Insight/${item}`
                    }}
                >
                    <Img src={`/static/${item}.png`} width={100} height={100} />
                    <Heading size="md" color='white' mt={4}>
                        {item}
                    </Heading>
                </Flex>
                
                ))}
            </Grid>
        </Flex>
    </Box>
            </Box>
        </Box>
    )
}

export default index
