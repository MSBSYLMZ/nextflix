import Head from "next/head";
import Banner from "../components/banner/banner";
import SectionCards from "../components/card/section-cards";
import styles from "../styles/Home.module.css";
import { getVideos } from "../lib/videos";

export async function getServerSideProps() {
	const disneyVideos = await getVideos('disney trailers');
	const travelVideos = await getVideos('travel');
	const productivityVideos = await getVideos('productivity');
	const popularVideos = await getVideos(null, true);
	return { props: { disneyVideos, travelVideos,productivityVideos, popularVideos } };
}

export default function Home(props) {
	const  { disneyVideos, travelVideos,productivityVideos, popularVideos } = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
			</Head>
			<Banner
				title="Dr. Strange in The Multiverse Of Madnes"
				subtitle="Today we will see what kind of Dr.Strange are you."
				imgUrl="/static/banner2.jpg"
			/>
			<div className={styles.sectionWrapper}>
				<SectionCards title="Disney" videos={disneyVideos} size="large" />
				<SectionCards title="Travel" videos={travelVideos} size="small" />
				<SectionCards title="Productivty" videos={productivityVideos} size="medium" />
				<SectionCards title="Popular" videos={popularVideos} size="small" />
			</div>
		</div>
	);
}
