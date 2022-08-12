import styles from './logo.module.css'
import Link from "next/dist/client/link";

function Logo() {
	return (
		<div className={styles.logo}>
			<Link href="/">
				<p className={styles.logoLink}>NEXTFLIX</p>
			</Link>
		</div>
	);
}

export default Logo;
