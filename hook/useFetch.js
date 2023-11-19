import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, QUERY) => {
    /**
     * Planning to reuse this functionality hence the name HOOK
     * will take endpoint as a prop, just makes the URL reusable.
     * 'https://jsearch.p.rapidapi.com/search'
     */
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...QUERY
            //   query: 'Python developer in Texas, USA',
            //   page: '1',
            //   num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': '4705967834mshe3a74787e56b3f2p1fc837jsn294becaab1b6',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    // Fetch the Data
    const fetchData = async() => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            console.log('DATA', response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error.');

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // fetchData();
    }, []);

    const refetch = () => {
        /**
         * Just in case the use effect had issues while trying to fetch data
         */
        setIsLoading(true);
        // fetchData();
    }


    return { data, isLoading, error, refetch };

}

export default useFetch;