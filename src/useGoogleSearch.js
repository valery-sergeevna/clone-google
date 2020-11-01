import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = 'CONTEXT_KEY'; //your context key

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(result => {
                    setData(result);
                })
                .catch(error => {
                    console.log(error)
                });
        };
        fetchData();
    }, [term]);

    return { data };
};

export default useGoogleSearch;