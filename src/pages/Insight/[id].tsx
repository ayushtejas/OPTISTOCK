// pages/Insight/[insightName].tsx
import Inventory from '@/src/components/Inventory';
import Store from '@/src/components/Store';
import Sales from '@/src/components/Sales';
import { Box, Heading, Text, VStack, Image, Img, HStack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import Top from '@/src/components/breadcrumb/top';

interface Props {
    insightName:string
}
const Insight = ({ insightName }:Props) => {

    const Headers: { [key: string]: string } = {
        'Charts': 'Charts',
        'Inventory': 'Inventory/ Distribution Channel Space Utilization',
        'Stores': 'Store List',
        'Sales': 'Sales',
        'Production Forecast': 'Production Forecast'
    }

    const Descriptions: { [key: string]: string }  = {
        'Charts': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Quae cum essent dicta, discessimus.',
        'Inventory': 'Track and visualize inventory space utilization. Higher utilization (within limits) saves space and optimizes storage. Click for details.',
        'Stores': 'Explore comprehensive details on list of store locations and their respective capacities on floor',
        'Sales': 'Optimize inventory management by monitoring GRN counts for production, ensuring efficient stock control.',
        'Production Forecast': 'Optimize inventory management by monitoring GRN counts for production, ensuring efficient stock control.'
    }

    return (
        <Box sx={{ height: '100vh', width: '100vw', position: 'relative' }} p='4'>
            <Top breadcrumbs={{breadcumbs:{
                "name": `${insightName}`,
                "link": `/Inventory/${insightName}`,
                "isCurrent": true
            }}}/>
            <Heading textAlign={'center'} mt={2} size='xl'>{Headers[insightName]}</Heading>
            
            {insightName==='Inventory'&&
            (<Inventory/>)}
            {insightName ==='Stores' &&
            (<Store/>)}
            {insightName === 'Sales' && (
                <Sales id={`${insightName}`}/>
            )}
            <Box sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
                <HStack px={'4'} pb={0} spacing={4} h={'150px'} mx={2}>
                    <Box w={'15%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Box w={'fit-content'} borderRadius={'5px'} bgColor={'gray.800'}>
                            <Img height={'80px'} p={4} width={'80px'} src={`/static/${insightName}.png`} />
                        </Box>
                        <Text textAlign={'center'}>{insightName}</Text>
                    </Box>


                    <Text textAlign={'left'} color="gray.600">{Descriptions[insightName]}</Text>
                </HStack>
            </Box>
        </Box>
    );
};

export default Insight;

export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
    const insightName: string | undefined = params?.id as string | undefined;
    return {
        props: {
            insightName: insightName || null
        }
    };
};
