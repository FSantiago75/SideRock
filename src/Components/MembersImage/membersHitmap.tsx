import styles from "./membersImage.module.css";

type Props = {
  onHover: (id: string | null) => void;
};

export const MembersHitmap = ({ onHover }: Props) => {
  
  const handleEnter = (e: React.PointerEvent<SVGPathElement>) => {
    const id = e.currentTarget.dataset.id;
    if (id) onHover(id);
  };

  return (
    <svg
      viewBox="0 0 1024 1536"
      className={styles.Hitmap}
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
    >
      <path fill="rgba(255, 0, 0, 0)"
        stroke="none"
        pointerEvents="all"
        data-id="marcelo"
        fillRule="evenodd"
        d="M456 894L459.5 911.5L321 962.5L345.5 1037.5L480 982.5L555.5 1236H578L596.5 1328L587.5 1432L674 1424L685 1282.5L611.5 1131.5L559 978.5L664.5 931L707 850L694.5 824.5L739 808.5L753.5 778L680 677L622 651L640 605L632 571.5L611.5 557.5H587.5L556.5 591V619L564 635.5L485 667.5L395.5 749L413 814L424.5 872L456 894ZM456 894L474 853.5V850M474 850L473 755L450.5 762L448.5 814L459.5 835L474 850Z"
        onPointerEnter={handleEnter}
        onPointerLeave={() => onHover(null)}
      />

      <path fill="rgba(0, 255, 0, 0)"
        stroke="none"
        pointerEvents="all"
        data-id="victor"
        fillRule="evenodd"
        d="M819 967L826.5 1010.5L732 1034L726 1006.5L767.5 973L772 832L748 677L772 571L726 559L731.5 502.5L752.5 453L777 407L799 329.5L812 310L839 294L877 318.5L909 399L942.5 427L958.5 549.5L918.5 585.5L929.5 693.5V791L941.5 818.5L970.5 946V1016.5L988.5 1100L921 1093.5L925.5 1021L915.5 946L839 729.5L822 818.5L819 967Z"
        onPointerEnter={handleEnter}
        onPointerLeave={() => onHover(null)}
      />

      <path fill="rgba(0, 0, 255, 0)"
        stroke="none"
        pointerEvents="all"
        data-id="drums" 
        fillRule="evenodd"
        d="M530 386.5L511.5 381.5L491 390.5L480.5 416L475 470L458.5 474L435.5 486L413.5 557.5L420 599.5L454 589L466 681L475.5 671.5L487.5 664.5L561.5 634L554.5 619.5V589.5L571 571.5L587.5 554.5H611.5L634 571.5L642 605.5L625 649.5L654.5 663.5L662.5 656L673 614L682 582L676 538.5L645.5 492L618 450L562 444L554.5 416L530 386.5Z"
        onPointerEnter={handleEnter}
        onPointerLeave={() => onHover(null)}
      />

      <path fill="rgba(255, 255, 255, 0)"
        stroke="none"
        pointerEvents="all"
        data-id="bass"
        fillRule="evenodd"
        d="M281.5 312.5L255.5 303.5L242 307L219.5 325L224 353.5L215 358L227 380.5L234.5 408.5L197.5 419.5L177.5 425L166.5 466.5L165 502L194.5 525L193 647L186.5 659L170 791.5L120.5 966V1037.5L101.5 1096L161.5 1093.5L174.5 1046L187 977.5L217.5 945.5L207 928L224 903L228 866L289 725.5L331 871.5V900L345 949L404 929L401.5 916L377 874L375 825.5L388.5 798L348.5 538H364L383.5 528.5V493.5L353.5 442.5L337 429.5L289 414L298.5 358L293 353.5L295.5 335.5L281.5 312.5Z" 
        onPointerEnter={handleEnter}
        onPointerLeave={() => onHover(null)}
      />
    </svg>
  );
};
