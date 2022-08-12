import styles from "./banner.module.css";
import Image from "next/image";

function Banner(props) {
	const { title, subtitle, imgUrl } = props;

	const handlePlay = () => {};

	return (
		<div className={styles.container}>
			<div className={styles.leftWrapper}>
				<div className={styles.left}>
					<div className={styles.nseriesWrapper}>
						<p className={styles.firstLetter}>N</p>
						<p className={styles.series}>S E R I E S</p>
					</div>
					<h3 className={styles.title}>{title}</h3>
					<h4 className={styles.subtitle}>{subtitle}</h4>
					<div className={styles.playBtnWrapper}>
						<button className={styles.btnWithIcon} onClick={handlePlay}>
							<Image src="/static/play-arrow.svg" width={24} height={24} alt="play icon" />
							<span className={styles.playText}>Play</span>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.bannerImgWrapper}>
				<Image className={styles.bannerImg} src={imgUrl} alt="banner" layout="fill" objectFit="cover" />
			</div>
		</div>
	);
}

export default Banner;
