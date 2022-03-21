import { useState, useEffect } from 'react'

function usePersistedState<T>(key: string, initialState: T) {
    const [state, setState] = useState(() => {
        let storageValue

        if (typeof window !== 'undefined') {
            storageValue = localStorage.getItem(key)
        }

        if (storageValue) {
            return JSON.parse(storageValue)
        }

        return initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState