export type {
    CardType,
    CardListType,
}

type CardType =
    {
        nameNav: string;
        nameCard: string;
        overview: string;
        modalContent: string;
        image: string;
        tags: string[];
    };

type CardListType = {
    cards: CardType[];
}