import Card from './cardModal_markdown';
import { CardListType } from '../_types/cards';

export default function CardSection({ cards }: CardListType) {
    return (
        <div className='flex flex-row flex-wrap justify-center place-content-evenly gap-24 py-8'>
            {cards.map((item, itemIndex) => (
                <Card key={itemIndex} {...item}/>
            ))}
        </div>
    )
}
