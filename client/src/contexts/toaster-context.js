import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
/**
 * value provided here to the createContext method is just a default value and will be overwritten by value give to Provider
 * this value provided here to createContext will be only used if we use consumer without Provider
 */
const ToasterContext = React.createContext({
    toasts: [],
    setToasts: () => {},
    addToast: () => {},
    removeToast: () => {},
});

export const ToasterContextProvider = (props) => {
    const [toasts, setToasts] = useState([]);

    const removeToast = (id) => {
        const index = toasts.findIndex((toast) => toast.id === id);
        toasts.splice(index, 1);
        setToasts([...toasts]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (toasts.length) {
                removeToast(toasts[0].id);
            }
        }, 1500);
        return () => {
            clearInterval(interval);
        };
    }, [toasts]);

    const addToast = (status, message) => {
        setToasts((previousToasts) => {
            return [...previousToasts, { id: uuidv4(), status, message }];
        });
    };

    return (
        <ToasterContext.Provider
            value={{
                toasts,
                setToasts,
                addToast,
                removeToast,
            }}
        >
            {props.children}
        </ToasterContext.Provider>
    );
};

export default ToasterContext;
