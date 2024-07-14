import PropTypes from 'prop-types';
import { createContext, useContext, useState, useMemo } from "react";

// Create context
export const UIcontext = createContext();

// Custom hook to use the UI context
export const ContexUi = () => useContext(UIcontext);

// UI Provider component
export const UIprovider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);
    const [searchBox, setSearchBox] = useState(false);

    // Define value object to be provided to context consumers, memoized to prevent unnecessary re-renders
    const value = useMemo(() => ({
        drawer,
        setDrawer,
        searchBox,
        setSearchBox
    }), [drawer, setDrawer, searchBox, setSearchBox]);

    // Return the provider with the value and children
    return (
        <UIcontext.Provider value={value}>
            {children}
        </UIcontext.Provider>
    );
};

// Add PropTypes for validation
UIprovider.propTypes = {
    children: PropTypes.node.isRequired,
};
