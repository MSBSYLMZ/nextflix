import styles from "./card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import cls from "classnames";
import { useState } from "react";

const DEFAULT_IMAGE =
	"https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80";

const classMap = {
	large: styles.lgItem,
	medium: styles.mdItem,
	small: styles.smItem,
};

function Card(props) {
	const { size = "medium", imgUrl: imgUrlProps = DEFAULT_IMAGE, id } = props;
	const [imgUrl, setImgUrl] = useState(imgUrlProps);

	const handleImgError = () => {
		setImgUrl(DEFAULT_IMAGE);
	};
	const scale = id ?? id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
	return (
		<div className={styles.container}>
			<motion.div whileHover={scale} className={cls(classMap[size], styles.imgMotionWrapper)}>
				<Image className={styles.cardImg} src={imgUrl} alt="card" layout="fill" objectFit="cover" onError={handleImgError} />
			</motion.div>
		</div>
	);
}

export default Card;
