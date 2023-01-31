import { getDataRequest } from "~/actions/fetch.server";

export class NewsAPI {

    static newsApiURL = "https://newsapi.org/v2"
    static newsApiKey = "e3a0b4f94235476295160cb4c329d40e"
    static pageSize = 24
    static page = 1
    static country = "us"

    static async loadNews(params: URLSearchParams, request: Request) {
        params.append('country', this.country)
        params.append('apiKey', this.newsApiKey)
        params.append('pageSize', this.pageSize.toString())
        params.append('country', this.country)

        const { data } = await NewsAPI.getNews(params);
        return data;
    }

    static async loadArticle(params: URLSearchParams, articleId: string) {
        const pageSize = 1;
        params.append('country', this.country)
        params.append('apiKey', this.newsApiKey)
        params.append('pageSize', pageSize.toString());
        params.append('q', articleId)

        const { data } = await NewsAPI.getNews(params);
        return data;
    }

    private static getNews(params: URLSearchParams) {
        return getDataRequest(`${this.newsApiURL}/top-headlines?${params.toString()}`, { throwError: true });
    }

}