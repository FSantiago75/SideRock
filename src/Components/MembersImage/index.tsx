import MembersNull from "../../assets/MembersImages/MembersNull.jpeg";
import styles from "./membersImage.module.css";
import { GiDeathSkull } from "react-icons/gi";
import { useMemo, useState } from "react";
import { MembersHitmap } from "./membersHitmap";

export const MembersImage = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    
    useMemo(() => {
        console.log(hovered);
    }, [hovered]);

    return (
        <div className={styles.CardContainer}>
            <div className={styles.MembersImageContainer}>
                <GiDeathSkull className={styles.BurningSkull} />
                <div className={styles.PhotoStack}>
                    <img
                        className={styles.MembersImage}
                        src={MembersNull}
                        alt="membersImage"
                    />
                    <MembersHitmap onHover={setHovered} />
                </div>
            </div>
        </div>
    );
};
