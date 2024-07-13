import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionsAppDesktop, ActionsAppMobile, MyList } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

 
 export default function Actions({matches}){
    const Components = matches ? ActionsAppMobile:ActionsAppDesktop
    return(
        <Components>
            <MyList type= "row">
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                 
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
           
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                   
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{justifyContent:"center"}}>
                <ListItemIcon sx={{display:"flex",justifyContent:"center",color:matches&& Colors.secondary}}>
                   
                    <Divider orientation="vertical" flexItem></Divider>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        </Components>
        
    )
 }
