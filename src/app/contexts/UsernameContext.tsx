'use client'
import React, { createContext, useContext, useState } from 'react'

type UsernameContextType = {
    username: string
    setUsername: (name : string) => void
}

const UsernameContext = createContext<UsernameContextType | undefined> (undefined)

export const UsernameProvider = ({children} : {children : React.ReactNode}) => {
    const [username, setUsername] = useState("")

    return (
        <UsernameContext.Provider value={{username, setUsername}}>
            {children}
        </UsernameContext.Provider>
    )
}

export const useUsername = () => {
    const context = useContext(UsernameContext)
    if(!context) return;
    return context;
}

export default UsernameContext