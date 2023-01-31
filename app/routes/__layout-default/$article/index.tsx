import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "react-router"
import ArticleContainer from "~/components/article-container";
import { NewsAPI } from "~/loaders/news.server";
import { getArticleTitle } from "~/utils/article";

export const meta: MetaFunction = ({ data }) => {
    const article = data?.article;
    const metaBody = {
        title: article?.title,
        description: article?.description,
        robots: 'index, follow',
    };
    return metaBody;
};


export const loader: LoaderFunction = async ({ params, request }) => {

    const urlSearchParams: URLSearchParams = new URLSearchParams();
    const articleTitle = getArticleTitle(params?.article);
    const promises = [articleTitle ? NewsAPI.loadArticle(urlSearchParams, articleTitle) : []];
    const [news] = await Promise.all(promises);
    const article = news.articles?.length ? news.articles[0] : []
    const canonicalUrl = `https://fudo-challenge.vercel.app/${params?.article}`;

    return json(
        {
            article: article,
            canonicalUrl
        }
    )
}

interface LoaderData {
    article: any
    canonicalUrl: string
}

export default function Article(): JSX.Element {
    const { article } = useLoaderData() as LoaderData;
    const articleDate = article?.publishedAt ? new Date(article.publishedAt) : null;
    return (
        <>
            <div className="article-container">
                {
                    article &&
                    <ArticleContainer
                        title={article?.title}
                        description={article.description}
                        date={articleDate?.toLocaleDateString()}
                        image={article.urlToImage}
                        content={article.content}
                        author={article.author} />
                }
            </div>
        </>
    )
}

export function dynamicLinks({ data }: { data: any }) {
    const links = [];
    if (data?.canonicalUrl) links.push({ href: data.canonicalUrl, rel: "canonical" });
    return links;
}

export const handle = {
    dynamicLinks,
}