import styles from "./section-cards.module.css";
import Card from "./card";

function SectionCards(props) {
	const { title, videos = [], size } = props;

	const cardItems = videos.map((card, index) => <Card key={index} id={index} size={size} imgUrl={card.imgUrl} />);

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.cardWrapper}>{cardItems}</div>
		</section>
	);
}

export default SectionCards;
