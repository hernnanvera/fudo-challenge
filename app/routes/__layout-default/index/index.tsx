import { LoaderFunction } from "react-router";
import { NewsAPI } from "~/loaders/news.server";
import { useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";
import CardContainer from "~/components/card-container";
import { getSiteConfig } from "~/utils/config/index.server";
import Pagination from "~/components/pagination";

export const meta: MetaFunction = ({ data }) => {

  const metaBody = {
    title: `${data.title} | Fudo Challenge`,
    description: 'Encontrá las noticias más recientes y destacadas.',
    robots: 'index, follow',
  };
  return metaBody;
};

export const loader: LoaderFunction = async ({ request,
  params }) => {

  const urlSearchParams: URLSearchParams = new URLSearchParams();
  const page = params?.pageNumber || getSiteConfig('initPage');
  const pageSize = getSiteConfig('pageSize');
  urlSearchParams.append('page', page.toString())
  urlSearchParams.append('page', pageSize)
  const promises = [NewsAPI.loadNews(urlSearchParams, request)];
  const [news] = await Promise.all(promises);
  const canonicalUrl = getSiteConfig('canonicalBaseUrl');
  const title = getSiteConfig('title')

  return json(
    {
      news: news.articles,
      totalResults: news.totalResults,
      currentPage: parseInt(page),
      pageSize,
      canonicalUrl,
      title,
    }
  )

}

interface LoaderData {
  news: any
  totalResults: number,
  currentPage: number,
  pageSize: number,
  canonicalUrl: string,
  title: string
}

export default function Index(): JSX.Element {

  const { news, totalResults, currentPage, pageSize, title } = useLoaderData() as LoaderData;
  const showTitle = true;

  return (
    <div className="news-container">
      {showTitle && <h1>{title}</h1>}
      <CardContainer newsCards={news} />
      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        pageSize={pageSize} />
    </div>
  );
}

export function dynamicLinks({ data }: { data: any }) {
  const links = [];
  if (data?.canonicalUrl) links.push({ href: data.canonicalUrl, rel: "canonical" });
  return links;
}

export const handle = {
  dynamicLinks,
}
