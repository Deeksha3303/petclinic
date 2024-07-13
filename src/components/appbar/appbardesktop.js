import { AppbarContainer, Appheader } from "../../styles/appbar";
import Actions from "./actions";
import { Colors } from "../../styles/theme";

export default function AppBarDesktop({matches}){
    
    return(
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>Pawprints</Appheader>
            <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
 }
