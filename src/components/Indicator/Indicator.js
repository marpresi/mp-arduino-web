import React from 'react';
import { useEffect, useState, useRef } from 'react';

import { getDistance } from './services';


import {
    Text
} from '@chakra-ui/react';

export const Indicator = () => {

    const [distance, setDistance] = useState();
    const intervalRef = useRef(null);

    useEffect(() => {

        intervalRef.current = setInterval(async () => {
            getDistance().then((res) => setDistance(res.data));
            console.log(distance);
        },1000);
        

        //unmounts
        return () => {
            clearInterval(intervalRef.current);
            console.log('unmounted');
        }
    }, []);

    return (
        <>
            <Text fontSize='10rem' color='tomato'>
                    {distance}
                </Text>
            {/* {distance.map((data) => (
                <Text fontSize='10rem' color='tomato'>
                    data
                </Text>
            ))} */}
        </>

    )

}