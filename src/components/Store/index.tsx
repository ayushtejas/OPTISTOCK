import { Box, Flex, HStack, ListItem, OrderedList } from '@chakra-ui/react'
import React from 'react'
import PaginatedApi from '../Table'

const index = () => {

    const array = {a:['Kompally', 'Hyderabad','500'],
        b:['Sarath City Capital Mall', 'Hyderabad','516'],
        c:['AIRIA Mall', 'Gurugram','488'],
        d:['1 MG-Lido Mall', 'Bengaluru','500'],
        e:['Infiniti Mall Malad', 'Mumbai','500'],
        f:[' Nexus Seawoods Mall', 'Mumbai','500'],
        g:[' Viviana Mall', 'Mumbai','490'],
        h:['The Pavillion Mall', 'Pune','512'],
        i:['Amanora Mall', 'Pune','500'],
        j:['Phoenix Mall of the Millennium', 'Pune','500'],
        k:['Stratum @ Venus Grounds', 'Ahmedabad','500']}

    return (
        <Flex justifyContent="center" my={'20px'} height="70vh">

            <Box w={'80%'} justifyContent={'center'} overflow={'auto'} px={4}>
                <PaginatedApi headers={["Mall Name", "Location", "Floor Capacity(No. of options)"]} body={array}/>
            </Box>
        </Flex>
    )
}

export default index