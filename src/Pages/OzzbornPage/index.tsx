import ButtonNavigation from '../../Components/ButtonNavigation'
import Contacts from '../../Components/Contacts'
import { InfoDialog } from '../../Components/InfoDialog/InfoDialog'
import { MembersImage } from '../../Components/MembersImage'

export const OzzbornPage = () => {
  return (
    <>
      <ButtonNavigation />
      <InfoDialog
        title="Ozzborn"
        message="Conteúdo da experiência Ozzborn"
      />
      <Contacts />
      <MembersImage />
    </>
  )
}
