import styles from "./navbar.module.css";
import Logo from "../logo/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

function NavBar(props) {
	const [showDropdown, setShowDropdown] = useState(false);
	const { username } = props;
	const router = useRouter();

	const handleRouting = e => {
		e.preventDefault();
		const id = e.target.id;
		const route = `/${id !== "home" ? id : ""}`;
		router.push(route);
	};

	const handleSignoutClick = () => {
		router.push("/login");
	};

	const toggleDropdown = () => {
		setShowDropdown((pre) => !pre);
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Logo />
				<ul className={styles.navItems}>
					<li id="home" className={styles.navItem} onClick={handleRouting}>
						Home
					</li>
					<li id="my-list" className={styles.navItem} onClick={handleRouting}>
						My List
					</li>
				</ul>
				<nav className={styles.navContainer}>
					<div>
						<button onClick={toggleDropdown} className={styles.usernameBtn}>
							<p className={styles.username}>{username}</p>
							 <Image src='/static/expand-more.svg' alt="expand icon" height={24} width={24}/>
						</button>
						{showDropdown && (
							<div className={styles.navDropdown}>
								<div>
									<Link href="/login">
										<a className={styles.linkName}>Sign out</a>
									</Link>
									<div className={styles.lineWrapper}></div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
