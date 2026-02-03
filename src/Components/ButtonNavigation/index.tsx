import { Menubar } from "radix-ui";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ButtonNavigation = () => {
	const navigate = useNavigate();
	return (
		<Menubar.Root className={styles.Root}>
			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate('/')} className={`${styles.Trigger} ${styles.Home}`}>Home</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate('/acoustic')} className={`${styles.Trigger} ${styles.Acoustic}`}>Acoustic</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate('/ozzborns')} className={`${styles.Trigger} ${styles.Ozzborns}`}>Ozzborns</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate('/side-rock')} className={`${styles.Trigger} ${styles.SideRock}`}>Side Rock</Menubar.Trigger>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

export default ButtonNavigation;
