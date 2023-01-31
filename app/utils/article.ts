export const getArticleTitle = (id: string | undefined) => {
    return id?.replace(/-/g, " ");
}

export const getArticleID = (title: string | undefined): string | null => {
    if (!title) return null;
    const articleTitle = title.split(" - ")[0];
    const partialId = articleTitle.replace(/[^a-zA-Z0-9 ]/g, "").trim().toLocaleLowerCase();
    const articleId = partialId.replace(/\s/g, "-");
    return articleId;
}