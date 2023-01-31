import { LoaderFunction } from "react-router";
import { NewsAPI } from "~/loaders/news.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import CardContainer from "~/components/card-container";
export const loader: LoaderFunction = async ({ request,
  params }) => {
  const urlSearchParams: URLSearchParams = new URLSearchParams();
  const promises = [NewsAPI.loadNews(urlSearchParams, request)];
  const [news] = await Promise.all(promises);

  return json(
    {
      news: news.articles
    }
  )

}

interface LoaderData {
  news: any
}

export default function Index(): JSX.Element {

  const { news } = useLoaderData() as LoaderData;

  return (
    <div className="container">
      <CardContainer newsCards={news} />
    </div>
  );
}
