import { getArticleID } from "~/utils/article"

interface CardContentProps {
    title: string,
    author: string,
    description: string
}

export default function CardContent({ title, author, description }: CardContentProps): JSX.Element {
    const articleID = getArticleID(title) || undefined;
    return (
        <>
            <div className="card__content">
                <h2>{title}</h2>
                <p className="card__content__description">{description}</p>
                <p className="card__content__author">{author}</p>
                <a className="card__content__button" href={articleID}> Leer mas</a>
            </div>
        </>
    )

}