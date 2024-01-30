import Card from './_comp_card';

type Card =
    {
        nameNav: string;
        nameCard: string;
        overview: string;
        href: string;
        image: string;
        tags: string[];
    };

type CardList = {
    cards: Card[];
}



export default function CardSection({ cards }: CardList) {
    return (
        <div className='flex flex-row flex-wrap justify-center place-content-evenly gap-24 py-8'>
            {cards.map((item, itemIndex) => (
                <Card key={itemIndex} {...item}/>
            ))}
        </div>
    )
}
