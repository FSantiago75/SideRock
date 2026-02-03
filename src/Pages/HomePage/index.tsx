// import ButtonNavigation from "../../Components/ButtonNavigation";
// import { InfoDialog } from "../../Components/InfoDialog/InfoDialog";
import styles from "./styles.module.css";
import SideRockImage from "../../assets/SideRock.jpg";
import AcousticImage from "../../assets/SideRockAcoustic.png";
import OzzbornsImage from "../../assets/SideRockOzzborn.png";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.ProjectSelector}>
				<div className={`${styles.ProjectSelectorItem} ${styles.Acoustic}`} onClick={() => navigate('/acoustic')}>
					<div className={styles.AcousticItem}>
						<div className={styles.ItemTitle}>
							Acoustic
						</div>
						<div className={styles.ItemImage}>
							<img src={AcousticImage}/>
						</div>
					</div>
				</div>
				<div className={`${styles.ProjectSelectorItem} ${styles.SideRock}`} onClick={() => navigate('/side-rock')}>
					<div className={styles.SideRockItem}>
					<div className={styles.ItemTitle}>
							Side Rock
						</div>
						<div className={styles.ItemImage}>
							<img src={SideRockImage}/>
						</div>
					</div>
				</div>
				<div className={`${styles.ProjectSelectorItem} ${styles.Ozzborns}`} onClick={() => navigate('/ozzborns')}>
					<div className={styles.OzzbornsItem}>
						<div className={styles.ItemTitle}>
							Ozzborn
						</div>
						<div className={styles.ItemImage}>
							<img src={OzzbornsImage}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};