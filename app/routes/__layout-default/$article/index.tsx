import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "react-router"
import { NewsAPI } from "~/loaders/news.server";
import { getArticleTitle } from "~/utils/article";


export const loader: LoaderFunction = async ({ params, request }) => {

    const urlSearchParams: URLSearchParams = new URLSearchParams();
    const articleID = getArticleTitle(params?.article);

    console.log('articleID', articleID);

    const promises = [articleID ? NewsAPI.loadArticle(urlSearchParams, articleID) : []];
    const [news] = await Promise.all(promises);

    console.log('news',news)

    const article = news.articles.length ? news.articles[0] : []

    return json(
        {
            article: article
        }
    )
}

interface LoaderData {
    article: any
}

export default function Article(): JSX.Element {

    const { article } = useLoaderData() as LoaderData;
    return (
        <>
        </>
    )
}