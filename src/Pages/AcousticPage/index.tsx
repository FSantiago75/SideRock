import ButtonNavigation from "../../Components/ButtonNavigation";
import { InfoDialog } from "../../Components/InfoDialog/InfoDialog";

export const AcousticPage = () => {
	return (
		<>
			<ButtonNavigation />
			<InfoDialog
				title="Acoustic"
				message="Conteudo do projeto 'Side Rock Acoustic'"
			/>
		</>
	);
};