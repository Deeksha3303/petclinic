import React,{ useContext } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from "@mui/material";
import { AppbarContainer, Appheader } from "../../styles/appbar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Actions from "./actions";
import { ContexUi } from "../../context/contexUI";

export default function AppBarMobile({ matches }) {
    const { setDrawer, setSearchBox } = useContext(ContexUi);
    
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawer(true)}>
                <MenuOutlinedIcon />
            </IconButton>
            <Appheader variant="h4" textAlign={"center"} color={"#d1adcc"}>My Bags</Appheader>
            <IconButton onClick={() => setSearchBox(true)}>
                <SearchOutlinedIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}

// Define prop types
AppBarMobile.propTypes = {
    matches: PropTypes.bool.isRequired,
};
