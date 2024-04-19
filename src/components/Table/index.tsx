import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { headers } from 'next/headers'
import React from 'react'


interface Props {
  headers: Array<String>,
  body?: Array<String>

}
const PaginatedApi = ({headers, body}:Props) => {
  return (
    <TableContainer>
      <Table  colorScheme='teal' size={'sm'}>
        <Thead>
          <Tr>
            {headers.map((item, key)=>(
            <Th textAlign={'center'} key={key} bgColor='gray.800' color='white' border='1px solid black'>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(body).map((item, value)=>(
            <Tr >
              {body[item].map((item, key)=>(
            <Td textAlign={'center'} key={key} border='1px solid black'>{item}</Td>))}
          </Tr>
          ))}
          
          {/* <Tr>
            <Td border='1px solid black'>feet</Td>
            <Td border='1px solid black'>centimetres (cm)</Td>
            <Td isNumeric border='1px solid black'>30.48</Td>
          </Tr>
          <Tr>
            <Td border='1px solid black'>yards</Td>
            <Td border='1px solid black'>metres (m)</Td>
            <Td isNumeric border='1px solid black'>0.91444</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default PaginatedApi
