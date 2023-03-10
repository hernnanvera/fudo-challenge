interface ArticleContainerProps {
    title: string,
    description: string,
    date: string | null,
    image: string,
    content: string,
    author: string | null | undefined,
}

export default function ArticleContainer({ title, description, date, image, content, author }: ArticleContainerProps): JSX.Element {
    const showArticle = !!title;
    return (
        <>
            <div className="article-section">
                {
                    showArticle ?
                        <>
                            <h1>{title}</h1>
                            <h2>{description}</h2>
                            {date && <p className="article-section__date">{date}</p>}
                            <div className="article-section__border-line"></div>
                            <img src={image} alt={title}></img>
                            <p className="article-section__content">{content}</p>
                            {author && <p className="article-section__author">{author}</p>}
                        </> :
                        <>
                            <p className="article-section__not-found">No se ha encontrado el artículo</p>
                        </>
                }
            </div>

        </>
    )
}