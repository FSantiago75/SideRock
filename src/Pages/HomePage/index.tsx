import ButtonNavigation from "../../Components/ButtonNavigation";
import { InfoDialog } from "../../Components/InfoDialog/InfoDialog";

export const HomePage = () => {
	return (
		<>
			<ButtonNavigation />
			<InfoDialog
				title="Home"
				message="Aqui ficará nosso menu interativo de navegação"
			/>
		</>
	);
};