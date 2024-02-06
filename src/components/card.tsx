import { listArticles } from "@/utils/types"
import { Card } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

type props = {
    article:listArticles
}

export default function CardArticle({article}:props){

    return <Link href={'/'+article.id}>
    <Card shadow="sm" padding="lg" radius="md" withBorder className=" w-72 h-64">
        {article.cover_image ? <Card.Section>
            <Image src={article.cover_image} alt={article.slug + "Cover Image"} width={288} height={50} className=" rounded-t-lg"/>
        </Card.Section> : ""}
        
        <Card.Section className="p-5 h-28">
            <p className=" font-bold text-base">{article.title}</p>
        </Card.Section>
    </Card>
    </Link> 
    
}