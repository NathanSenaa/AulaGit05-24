import card from './card-section.module.css'

interface CardProp {
    title: string;
    children: React.ReactNode;
}

export default function CardSection(props: CardProp) {
    return (
        <>
            <section className={card.card}>
                <h2>{props.title}</h2>
                <p className={card.cardTitle}>{props.children}</p>
            </section>
        </>
    );
}