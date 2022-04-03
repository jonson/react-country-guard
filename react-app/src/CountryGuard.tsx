import React from 'react';
import { useCountry } from './CountryContext';


interface Props {
    country: string;
    children?: React.ReactNode;
}

const CountryGuard = ({country, children}: Props) => {

    const {country: currentCountry} = useCountry();

    return country === currentCountry ? <>{children}</> : null;
}

export default CountryGuard;