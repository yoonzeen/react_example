import React, { useCallback, useEffect } from 'react';
import markerImgSrc from 'assets/images/marker.png'
import markerBlackImgSrc from 'assets/images/marker_black.png'

const { kakao } = window;
const Map = ({ state, lat, logt }) => {
    
    const loadKakaoMap = useCallback(async () => {
        const markerImgSize = new kakao.maps.Size(60, 60);
        const markerImgOption = { offset: new kakao.maps.Point(27, 60) };
        const markerImg = await new kakao.maps.MarkerImage(state === '영업중' ? markerImgSrc : markerBlackImgSrc, markerImgSize, markerImgOption);
        const markerPosition = await new kakao.maps.LatLng(lat, logt);
        const mapArea = document.getElementById('myMap');
        const mapOptions = {
            center: markerPosition,
            level: 6
        };
        const map = new kakao.maps.Map(mapArea, mapOptions);
        const marker = new kakao.maps.Marker({ position: markerPosition, image: markerImg})
        marker.setMap(map);
    }, [state, lat, logt]);
    
    useEffect(() => {
        loadKakaoMap();
    }, [loadKakaoMap]);
    return (
        <>
            <div id="myMap" style={{ width: '100%', height: '400px' }}></div>
        </>
    );
};

export default Map;