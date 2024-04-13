import { Box, HStack, ListItem, OrderedList } from '@chakra-ui/react'
import React from 'react'
import PaginatedApi from '../breadcrumb/Table/table'

const index = () => {

    const array = ['Kompally, Hyderabad',
        'Sarath City Capital Mall, Hyderabad',
        'AIRIA Mall, Gurugram',
        '1 MG-Lido Mall, Bengaluru',
        'Infiniti Mall Malad, Mumbai',
        ' Nexus Seawoods Mall, Mumbai',
        ' Viviana Mall, Mumbai',
        'The Pavillion Mall, Senapati Bapat Rd, Pune',
        'Amanora Mall, Pune',
        'Phoenix Mall of the Millennium, Pune',
        'Stratum @ Venus Grounds, Ahmedabad']

    return (
        <HStack>
            <Box w={'65%'} p={'100px'} justifyContent={'center'}><PaginatedApi /></Box>
            <Box w={'30%'} justifyContent={'center'}>
                <OrderedList>
                    {array.map((item, key) => (
                        <ListItem>{item}</ListItem>
                    ))}

                </OrderedList>
            </Box>
        </HStack>
    )
}

export default index