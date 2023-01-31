
interface CardContentProps {
    title: string,
    author: string,
    description: string
}

export default function CardContent({ title, author, description }: CardContentProps): JSX.Element {
    return (
        <>
            <div className="card__content">
                <h2>{title}</h2>
                <p className="card__content__description">{description}</p>
                <p className="card__content__author">{author}</p>
                <div className="card__content__button">
                    Ver mas
                </div>
            </div>
        </>
    )

}