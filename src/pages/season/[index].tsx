import Top from '@/src/components/breadcrumb/top';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRef, useState } from 'react';

interface SeasonPageProps {
    season: string;
    type: string;
}

const SeasonPage = ({ season, type }: SeasonPageProps) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files ? event.target.files[0] : null;
        if (file) {
            setUploadedFiles([...uploadedFiles, file]);
        }
    };

    const handleDelete = (index: number) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
    };

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

            <Box
                position="fixed"
                bottom="4"
                right="14"
                zIndex="10"
            ><Button onClick={() => { location.href = '/Insight/Production Forecast' }}>Go to Production Forcast</Button></Box>
        </Box>
    );
};

export default SeasonPage;

export const getServerSideProps: GetServerSideProps<any> = async ({ params, query }) => {
    const season: string | null = params && typeof params.id === 'string' ? params.id : null;
    const type: string | null = query && typeof query.type === 'string' ? query.type : null;

    return {
        props: {
            season: season,
            type: type
        }
    };
};

