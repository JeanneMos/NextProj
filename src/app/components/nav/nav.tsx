import Image from "next/image";
import Link from "next/link";
import Svg from "../../svg/axe.svg";
import classes from "./nav.module.css";

export const Nav = () => {
	return (
		<nav>
			<ul className={classes.navList}>
				<li>
					<Link href="/">
						<Image src={Svg} sizes="" alt="NextProj" />
					</Link>
				</li>
				<li>
					<Link href="/hey">Hey</Link>
				</li>
				<li>
					<Link href="/ya">Ya</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
