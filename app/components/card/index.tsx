import { getArticleID } from "~/utils/article";
import CardContent from "./components/card-content";

interface CardProps {
    title: string,
    author: string,
    description: string,
    imageUrl: string,
}

export default function Card({ title, author, description, imageUrl }: CardProps): JSX.Element {
    const articleID = getArticleID(title) || undefined;
    return (
        <>
            <a className="card" href={articleID}>
                <img src={imageUrl || "/images/default-image.png"} alt={title}></img>
                <CardContent
                    title={title}
                    author={author}
                    description={description} />
            </a>
        </>
    )
}