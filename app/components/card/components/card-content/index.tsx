
interface CardContentProps {
    title: string,
    author: string,
    description: string
    articleID?: string
}

export default function CardContent({ title, author, description, articleID }: CardContentProps): JSX.Element {
    return (
        <>
            <div className="card__content">
                <h2>{title}</h2>
                <p className="card__content__description">{description}</p>
                {author && <p className="card__content__author">{author}</p>}
                {articleID && <a className="card__content__button" href={articleID}> Leer mas</a>}
            </div>
        </>
    )
}