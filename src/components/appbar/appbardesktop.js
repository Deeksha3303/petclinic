import PropTypes from 'prop-types';
import { AppbarContainer, Appheader } from "../../styles/appbar";
import Actions from "./actions";

function AppBarDesktop({ matches }) {
    return (
        <AppbarContainer>
            <Appheader color={"#d1adcc"}>Pawprints</Appheader>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}

// Define propTypes for the component
AppBarDesktop.propTypes = {
    matches: PropTypes.bool.isRequired, // Ensure matches is a required boolean prop
};

export default AppBarDesktop;
