import ButtonNavigation from "../../Components/ButtonNavigation";
import { InfoDialog } from "../../Components/InfoDialog/InfoDialog";

export const SideRockPage = () => {
	return (
		<>
			<ButtonNavigation />
			<InfoDialog
				title="Side Rock"
				message="Conteudo do projeto 'Side Rock'"
			/>
		</>
	);
};