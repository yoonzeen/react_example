import React, { useEffect } from 'react';

const { kakao } = window;
const Map = () => {
    
    useEffect(() => {
        const mapArea = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        new kakao.maps.Map(mapArea, options);
    }, []);
    return (
        <>
            <div id="myMap" style={{ width: '500px', height: '400px'}}></div>
        </>
    );
};

export default Map;