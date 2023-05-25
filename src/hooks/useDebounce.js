import { useState, useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

function useDebounce(value, delay) {
    const [debouncedValue, setdebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setdebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}
export default useDebounce;
