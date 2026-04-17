import MembersNull from "../../assets/MembersImages/MembersNull.jpeg";
import styles from "./membersImage.module.css";
import { GiDeathSkull } from "react-icons/gi";
import { useState } from "react";
import { MembersHitmap } from "./membersHitmap";
import { membersMap } from "./membersMap";

const memberKeys = Object.keys(membersMap) as (keyof typeof membersMap)[];

export const MembersImage = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const selectFunction = (hovered: string | null, selected: string | null) => {
        if(selected != null) {
            return selected;
        }
        if(hovered != null) {
            return hovered;
        }
        return null;
    };

    const activeKey = selectFunction(hovered, selected);

    return (
        <div className={styles.CardContainer}>
            <div className={styles.MembersImageContainer}>
                <GiDeathSkull className={`${styles.BurningSkull} ${activeKey ? styles.BurningSkullHover : ""} ${selected ? styles.BurningSkullPulse : ""}`} />
                <div className={styles.PhotoStack}>
                    <img
                        className={`${styles.MembersImage} ${activeKey === null ? styles.MembersImageVisible : ""} ${selected ? styles.MembersImagePulse : ""}`}
                        src={MembersNull}
                        alt="membersImage"
                    />
                    {memberKeys.map((key) => (
                        <img
                            key={key}
                            className={`${styles.MembersImage} ${styles.MembersImageLayer} ${activeKey === key ? styles.MembersImageVisible : ""}`}
                            src={membersMap[key]}
                            alt=""
                        />
                    ))}
                    <MembersHitmap onHover={setHovered} onSelect={setSelected} />
                </div>
            </div>
        </div>
    );
};
