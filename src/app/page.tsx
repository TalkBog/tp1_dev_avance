"use client"
import CardArticle from "@/components/card";
import { listArticles, NextPageProps } from "@/utils/types";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type props = {
  page:number,
  per_page:number
}

export default function Home({ searchParams }: NextPageProps<props>) {
  const [data, setData] = useState<listArticles[]>([])
  const [page, setPage] = useState(1)
  const [per_page, setPerPage] = useState(30)
  useEffect(()=>{
    if(searchParams.page){
    
      typeof searchParams.page === "object" ? setPage(+searchParams.page[0]) : setPage(+searchParams.page)
    }
    if(searchParams.per_page){
      typeof searchParams.per_page === "object" ? setPerPage(+searchParams.per_page[0]) : setPerPage(+searchParams.per_page)
    }
  }, [])
  
  
  useEffect(()=> {
    
    const getAllAricles = async () => {
      console.log("coucou", page, per_page)
      const dynamicData:listArticles[] = await fetch(`https://dev.to/api/articles?page=${page}&per_page=${per_page}`,
    ).then(async (response) => {
        const newResponse:listArticles[] = await response.json()
        setData([...newResponse])
        return newResponse
    })
    }
    getAllAricles()
    
  }, [page,per_page])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section>
        <h1>Articles</h1>
      </section>
      <section className="flex flex-row flex-wrap gap-12 items-center justify-start content-center p-20">
        
          {data.map((article, index) => {return <CardArticle key={index} article={article}/>})}
        
      </section>
      <section className="flex flex-row justify-between items-center content-between w-full">
      <Button justify="center" variant={page<2? "default": "filled"} disabled={page<2 ? true : false} color="indigo">
        <Link href={`/?page=${page-1}&per_page=${per_page}`}>
          Page précedente
        </Link>
        
      </Button>
      <Button justify="center" variant="filled" color="indigo">
        Page Suivante
      </Button>
      </section>
    </main>
  );
}
