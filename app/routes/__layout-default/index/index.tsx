import { LoaderFunction } from "react-router";
import { NewsAPI } from "~/loaders/news.server";
import { useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/node";
import CardContainer from "~/components/card-container";

export const meta: MetaFunction = () => {

  const metaBody = {
    title: ' Las noticias más destacadas en tiempo real | Fudo Challenge',
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
  const canonicalUrl = 'https://fudo-challenge.vercel.app/';

  return json(
    {
      news: news.articles,
      canonicalUrl
    }
  )

}

interface LoaderData {
  news: any
  canonicalUrl: string
}

export default function Index(): JSX.Element {

  const { news } = useLoaderData() as LoaderData;

  return (
    <div className="container">
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
