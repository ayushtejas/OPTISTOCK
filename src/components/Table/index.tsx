import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

interface Props {
  headers: string[];
  body?: { [key: string]: any[] };
}

const PaginatedApi = ({ headers, body }: Props) => {
  return (
    <TableContainer>
      <Table colorScheme="teal" size="sm">
        <Thead>
          <Tr>
            {headers.map((item, key) => (
              <Th textAlign="center" key={key} bgColor="gray.800" color="white" border="1px solid black">
                {item}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {body && Object.keys(body).map((key) => (
            <Tr key={key}>
              {body[key].map((item, index) => (
                <Td textAlign="center" key={index} border="1px solid black">
                  {item}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PaginatedApi;
