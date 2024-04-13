import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Index:NextPage = () => {
    useEffect(()=>{
        router.push('home')
    },[])
    const router = useRouter()
    
  return (
    <></>
  )
}

export default Index

