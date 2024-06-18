import {  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, Appheader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { Colors } from "../../styles/theme";
import { ContexUi } from "../../context/contexUI";

export default function AppBarDesktop({matches}){
    
    const {setSearchBox}= ContexUi();
    return(
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>Pawprints</Appheader>
            <Actions matches={matches}></Actions>
        </AppbarContainer>
    )
 }
