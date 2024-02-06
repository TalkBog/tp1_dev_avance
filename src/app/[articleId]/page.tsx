"use client";
import { NextPageProps, articles } from "@/utils/types";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Image from "next/image";

type props = {
  articleId: number;
};
export default function Page({ params }: NextPageProps<props>) {
  const [articleData, setArticleData] = useState<articles>();

  useEffect(() => {
    const getArticle = async () => {
      const dynamicData: articles = await fetch(
        `https://dev.to/api/articles/${params.articleId}`
      ).then(async (response) => {
        console.log(response)
        const newResponse: articles = await response.json();
        setArticleData(newResponse);
        return newResponse;
      });
      
    };
    getArticle();
  }, []);


    return <>
  <main>
    <section className="flex flex-col gap-5 items-center justify-start">
        {articleData?.cover_image ? <Image src={articleData.cover_image} alt={articleData.slug} width={window.innerWidth - 100} height={100} className=" rounded-xl "/> : ""}
        <h1 className=" font-bold text-3xl">{articleData?.title}</h1>
    </section>
    <section>
        {articleData?.body_html ? parse(articleData.body_html) : ""}
    </section>
    
  </main>
  </>
  
}
