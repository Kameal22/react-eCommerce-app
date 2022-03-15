import React, { createContext, useContext, useState } from "react";
import { LastWatchedInterface } from "../interfaces/LastWatchedInterface";

export const LatelyWatchedContext = createContext<LastWatchedInterface[]>([])

export const SetLWContext = createContext<
    React.Dispatch<React.SetStateAction<LastWatchedInterface[]>> | undefined
>(undefined);

export const useSetLW = () => {
    const setLW = useContext(SetLWContext);

    if (!setLW) {
        throw new Error('Called outside setLW provider')
    }
    return setLW
}

export const LWProvider: React.FC = ({ children }) => {
    const [lastWatched, setLastWatched] = useState<LastWatchedInterface[]>([]);

    return (
        <LatelyWatchedContext.Provider value={lastWatched}>
            <SetLWContext.Provider value={setLastWatched}>
                {children}
            </SetLWContext.Provider>
        </LatelyWatchedContext.Provider>
    );
};