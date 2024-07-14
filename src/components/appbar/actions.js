import PropTypes from 'prop-types';
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionsAppDesktop, ActionsAppMobile, MyList } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

function Actions({ matches }) {
    const Components = matches ? ActionsAppMobile : ActionsAppDesktop;
    return (
        <Components>
            <MyList type="row">
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
                        <Divider orientation="vertical" flexItem />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
                        <Divider orientation="vertical" flexItem />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
                        <Divider orientation="vertical" flexItem />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Components>
    );
}

Actions.propTypes = {
    matches: PropTypes.bool.isRequired,  // Add 'matches' prop with PropTypes.bool
};

export default Actions;
