import { AppbarContainer, Appheader } from "../../styles/appbar";
import Actions from "./actions";
import { Colors } from "../../styles/theme";
import { ContexUi } from "../../context/contexUI";

export default function AppBarDesktop({matches}){
    
    return(
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>Pawprints</Appheader>
            <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
 }
