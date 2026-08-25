import { Menubar } from "radix-ui";
import { useNavigate } from "react-router-dom";
import { EXPERIENCE_ROUTES } from "../../config/experiences";
import styles from "./styles.module.css";

const ButtonNavigation = () => {
	const navigate = useNavigate();
	return (
		<Menubar.Root className={styles.Root}>
			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate(EXPERIENCE_ROUTES.catalog)} className={`${styles.Trigger} ${styles.Home}`}>Home</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate(EXPERIENCE_ROUTES.acoustic)} className={`${styles.Trigger} ${styles.Acoustic}`}>Acústico</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate(EXPERIENCE_ROUTES.ozzborn)} className={`${styles.Trigger} ${styles.Ozzborn}`}>Ozzborn</Menubar.Trigger>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger onClick={() => navigate(EXPERIENCE_ROUTES.sideRock)} className={`${styles.Trigger} ${styles.SideRock}`}>Side Rock</Menubar.Trigger>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

export default ButtonNavigation;
