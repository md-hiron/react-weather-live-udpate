import { useEffect, useState } from "react"

const useLocalStorage = (storageKey, defaultValue) => {
    const [value, setValue] = useState( JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue );

    useEffect( () => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, storageKey] )

    return [value, setValue]
}

export default useLocalStorage