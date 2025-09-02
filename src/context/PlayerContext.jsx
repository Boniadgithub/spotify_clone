import { createContext } from "react";

 export const PlayerContext = createContext();

const PlayerContextProvider = ({ props }) => {

    const contextValue = {
        // Add any state or functions you want to share across components
    };
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );

}
export default PlayerContextProvider;
