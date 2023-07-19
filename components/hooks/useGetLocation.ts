import React from 'react';

export default function useSetLocationData() {

    const [[lat, lon], setLocation] = React.useState(['', '']);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => 
                setLocation([
                    position.coords.latitude.toString(),
                    position.coords.longitude.toString()
                ])
            ,
            (error) => {
                console.log(error)
            },
            {
                timeout: 20000,
                maximumAge: 1000 * 60 * 15
            }
        )
    }, []);

    return [ lat, lon ]

}