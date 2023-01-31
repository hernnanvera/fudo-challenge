import CardContent from "./components/card-content";

interface CardProps {
    title: string,
    author: string,
    description: string,
    imageUrl: string,
}

export default function Card({ title, author, description, imageUrl }: CardProps): JSX.Element {
    return (
        <>
            <div className="card">
                <img src={imageUrl} alt={title}></img>
                <CardContent
                    title={title}
                    author={author}
                    description={description} />
            </div>
        </>
    )
}