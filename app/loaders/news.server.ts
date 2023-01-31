import { getDataRequest } from "~/actions/fetch.server";
import { getSiteConfig } from "~/utils/config/index.server";

export class NewsAPI {
    static newsApiURL = getSiteConfig('newsApiURL')
    static newsApiKey = process.env.NEWS_API_KEY
    static pageSize = getSiteConfig('pageSize')
    static country = getSiteConfig('country')

    static async loadNews(params: URLSearchParams, request: Request) {
        params.append('country', this.country)
        params.append('apiKey', this.newsApiKey)
        params.append('pageSize', this.pageSize.toString())
        params.append('country', this.country)

        const { data } = await NewsAPI.getNews(params);
        return data;
    }

    static async loadArticle(params: URLSearchParams, articleTitle: string) {
        const pageSize = 1;
        params.append('country', this.country)
        params.append('apiKey', this.newsApiKey)
        params.append('pageSize', pageSize.toString());
        params.append('q', articleTitle)

        const { data } = await NewsAPI.getNews(params);
        return data;
    }

    private static getNews(params: URLSearchParams) {
        return getDataRequest(`${this.newsApiURL}/top-headlines?${params.toString()}`, { throwError: true });
    }

}