import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "react-router"
import ArticleContainer from "~/components/article-container";
import { NewsAPI } from "~/loaders/news.server";
import { getArticleTitle } from "~/utils/article";


export const loader: LoaderFunction = async ({ params, request }) => {

    const urlSearchParams: URLSearchParams = new URLSearchParams();
    const articleID = getArticleTitle(params?.article);

    console.log('articleID', articleID);

    const promises = [articleID ? NewsAPI.loadArticle(urlSearchParams, articleID) : []];
    const [news] = await Promise.all(promises);

    const article = news.articles?.length ? news.articles[0] : []

    console.log('article', news);

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