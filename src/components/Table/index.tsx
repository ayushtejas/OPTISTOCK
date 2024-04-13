import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const PaginatedApi = () => {
  return (
    <TableContainer>
      <Table  colorScheme='teal'>
        <Thead>
          <Tr>
            <Th bgColor='gray.800' color='white' border='1px solid black'>DC</Th>
            <Th bgColor='gray.800' color='white' border='1px solid black'>Capacity</Th>
            <Th bgColor='gray.800' color='white' border='1px solid black'>Utilization Percentage</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td border='1px solid black'>inches</Td>
            <Td border='1px solid black'>millimetres (mm)</Td>
            <Td isNumeric border='1px solid black'>25.4</Td>
          </Tr>
          <Tr>
            <Td border='1px solid black'>feet</Td>
            <Td border='1px solid black'>centimetres (cm)</Td>
            <Td isNumeric border='1px solid black'>30.48</Td>
          </Tr>
          <Tr>
            <Td border='1px solid black'>yards</Td>
            <Td border='1px solid black'>metres (m)</Td>
            <Td isNumeric border='1px solid black'>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default PaginatedApi
