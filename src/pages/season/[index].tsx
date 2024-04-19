import Top from '@/src/components/breadcrumb/top';
import { Box, Button, Divider, Heading, HStack, Img, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRef, useState } from 'react';

interface SeasonPageProps {
    season: string;
    type: string;
}

const SeasonPage = ({ season, type }: SeasonPageProps) => {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const inputRef = useRef(null);

    const handleUpload = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedFiles([...uploadedFiles, file]);
    };

    const handleDelete = (index) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
    }

    return (
        <Box sx={{ height: '100vh', width: '100vw', position: 'relative' }} p='4'>
            <Top breadcrumbs={{
                breadcrumb1: {
                    "name": `Sales`,
                    "link": `/Insight/Sales`,
                    "isCurrent": false
                },
                breadcrumb2: {
                    "name": `${type}`,
                    "link": `/season/${type}`,
                    "isCurrent": true
                }
            }} />

            <Heading textAlign={'center'} mt={2} size='xl'>{type}</Heading>

            <Box>
                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={6}
                    textAlign="center"
                    maxW="70vw"
                    mx="auto"
                    my={8}
                >
                    <Button
                        colorScheme="blue"
                        size="lg"
                        mb={4}
                        onClick={handleUpload}
                    >
                        Upload Excel File
                    </Button>
                    <input
                        type="file"
                        ref={inputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <p>Click the button to upload an Excel file</p>
                </Box>

                <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={6}
                    height={'50vh'}
                    overflow={'auto'}
                    maxW="70vw"
                    mx="auto"
                >
                    <Heading size={'md'}>Uploaded Files</Heading>
                    <Divider my={2}></Divider>
                    {uploadedFiles.map((file, index) => (
                        <Box key={index} mb={4} display="flex" alignItems="center" justifyContent="space-between">
                            <Text>{file.name}</Text>
                            <Button colorScheme="red" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* <Box sx={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
                <HStack px={'4'} pb={0} spacing={4} h={'150px'} mx={2}>
                    <Box w={'15%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Box w={'fit-content'} borderRadius={'5px'} bgColor={'gray.800'}>
                            <Img height={'80px'} p={4} width={'80px'} src={`/static/sales.png`} />
                        </Box>
                        <Text textAlign={'center'}>{type}</Text>
                    </Box>


                    <Text textAlign={'left'} color="gray.600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil similique praesentium, id eos cupiditate dolor, placeat tenetur ducimus voluptates nesciunt minima quisquam suscipit laudantium ullam? Quod facere architecto illo!</Text>
                </HStack>
            </Box> */}
              <Box
                position="fixed"
                bottom="4"
                right="14"
                zIndex="10"
            ><Button onClick={()=>{location.href='/Insight/Production Forecast'}}>Go to Production Forcast</Button></Box>
        </Box>
    );
};

export default SeasonPage;

export const getServerSideProps: GetServerSideProps<SeasonPageProps> = async ({ params, query }) => {
    const season: string | undefined = params?.id as string | undefined;
    const type: string | undefined = query?.type as string | undefined;

    return {
        props: {
            season: season || null,
            type: type || null
        }
    };
};
