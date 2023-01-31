import Card from "../card";

interface CardContainerProps {
    newsCards: any[],
}

export default function CardContainer({ newsCards }: CardContainerProps) {
    return (
        <>
            <div className="card-section">
                {
                    newsCards.map((item, index) => (
                        <>
                            <Card
                                title={item.title}
                                author={item.author}
                                description={item.description}
                                imageUrl={item.urlToImage}
                            />
                        </>
                    ))
                }
            </div>
        </>
    )
}