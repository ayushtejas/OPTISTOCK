import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FaChevronRight } from "react-icons/fa";
import React from 'react'
import { breadCrumbsProps } from '@/src/constants/breadcrumbs';


interface Props {
    breadcrumbs: { [key: string]: breadCrumbsProps };
  }  
const Top = ({ breadcrumbs }: Props) => {
    return (
        <Breadcrumb ml={6} spacing="8px" separator={<FaChevronRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {Object.keys(breadcrumbs).map((item: string) => (
          <BreadcrumbItem key={item} isCurrentPage={breadcrumbs[item]?.isCurrent === true}>
            <BreadcrumbLink color={breadcrumbs[item]?.isCurrent === true ? 'gray' : 'black'} href={breadcrumbs[item]?.link}>
              {breadcrumbs[item]?.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    )
}

export default Top;
