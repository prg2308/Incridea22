import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import Loader from "../Components/Gallery2/components/Loader";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <Loader animate={true} />
    }
    return (
        <AuthContext.Provider
            value={currentUser}
        >
            {children}
        </AuthContext.Provider>
    );
};