export type {
    HeroPropsType,
}

type Button = {
    link: string;
    text: string;
};

type HeroPropsType = {
    image: string;
    title: string;
    subText: string;
    buttons: Button[];
};