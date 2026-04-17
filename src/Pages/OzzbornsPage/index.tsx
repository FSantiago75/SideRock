import ButtonNavigation from "../../Components/ButtonNavigation";
import { InfoDialog } from "../../Components/InfoDialog/InfoDialog";
import Contacts from "../../Components/Contacts";
import { MembersImage } from "../../Components/MembersImage/index.tsx";
export const OzzbornsPage = () => {
	return (
		<>
			<ButtonNavigation />
			<InfoDialog
				title="Ozzborns"
				message="Conteudo do projeto 'Ozzborns'"
			/>
			<Contacts />
			<MembersImage />
		</>
	);
};