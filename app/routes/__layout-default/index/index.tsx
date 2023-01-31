import { LoaderFunction } from "react-router";
import { NewsAPI } from "~/loaders/news.server";
import { useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";
import CardContainer from "~/components/card-container";

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
  const promises = [NewsAPI.loadNews(urlSearchParams, request)];
  const [news] = await Promise.all(promises);
  //TODO: load from config file
  const canonicalUrl = 'https://fudo-challenge.vercel.app/';
  const title = "Las noticias más destacadas en tiempo real"

  return json(
    {
      news: news.articles,
      canonicalUrl,
      title
    }
  )

}

interface LoaderData {
  news: any
  canonicalUrl: string
  title: string
}

export default function Index(): JSX.Element {

  const { news, title } = useLoaderData() as LoaderData;
  const showTitle = true;

  return (
    <div className="news-container">
      {showTitle && <h1>{title}</h1>}
      <CardContainer newsCards={news} />
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
