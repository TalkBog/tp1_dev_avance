export type listArticles = {
    id: number
    title: string
    description:string
    slug:string
    publishedAt: Date
    commentCount: number,
    cover_image : string
}

export type articles =  listArticles & {
    body_html : string
}

export type NextPageProps<T = Record<string, string>> = {
    /**
     * The path parameters received 
     * e.g. : page/[slug] --> params.slug
     */
    params: T,
    /**
     * The HTTP query parameters received
     * e.g. : my-page?page=1&order=asc --> searchParams.page and searchParams.order
     */
    searchParams: { [key: string]: string | string[] | undefined }
  };