import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FaChevronRight } from "react-icons/fa";
import React from 'react'
import { breadCrumbsProps } from '@/src/constants/breadcrumbs';

interface props{
    breadcrumbs: Array<breadCrumbsProps>
}
export const top = ({breadcrumbs}:props) => {
  return (
    <Breadcrumb spacing='8px' separator={<FaChevronRight color='gray.500' />}>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}
