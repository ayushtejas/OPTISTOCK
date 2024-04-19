import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FaChevronRight } from "react-icons/fa";
import React from 'react'
import { breadCrumbsProps } from '@/src/constants/breadcrumbs';

interface props {
    breadcrumbs: Array<breadCrumbsProps>
}
const Top = ({ breadcrumbs }: props) => {
    return (
        <Breadcrumb ml={6} spacing='8px' separator={<FaChevronRight color='gray.500' />}>

            <BreadcrumbItem >
                <BreadcrumbLink href='/home'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            {Object.keys(breadcrumbs).map((item, value) => (
                <BreadcrumbItem isCurrentPage={`${breadcrumbs[item]['isCurrent']}` === 'true'}>
                    <BreadcrumbLink color={(`${breadcrumbs[item]['isCurrent']}` === 'false') ? 'black' : 'gray'} href={`${breadcrumbs[item]['link']}`}>{breadcrumbs[item]['name']}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}


            {/* <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem> */}
        </Breadcrumb>
    )
}

export default Top;
