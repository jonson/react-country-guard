import React, { useEffect, useState } from 'react';

const CountryContext = React.createContext('');

interface Props {
    children?: React.ReactNode;
}

export const CountryProvider = ({children} : Props) => {
    const [country, setCountry] = useState('');

    useEffect(() => {

        const getCountry = async () => {
            try {
                const apiResponse = await fetch("https://country.jonson.workers.dev");
                const json = await apiResponse.json();
                if (json.country) {
                    setCountry(json.country);
                } else {
                    setCountry('??');
                }
            } catch (e) {
                setCountry('??');
            }
        }
        getCountry();
    }, [setCountry]);

    return <CountryContext.Provider value={country}>{children}</CountryContext.Provider>
}


export const useCountry = () => {
    const context = React.useContext(CountryContext);
    return {
        country: context
    }
  };