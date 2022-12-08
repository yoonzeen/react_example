import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { MOVIES_KEY, TARGET_DT } from '../../assets/data/data';
import ListItem from './ListItem';

const List = () => {
    const [movieList, setMovieList] = useState([]);
    // const getMovies = async () => {
    //     await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${MOVIES_KEY}&targetDt=${TARGET_DT}`)
    //         .then((res) => {
    //             console.log(res);
    //             setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
    //         }).catch((error) => console.log(error));
    // };
    // useEffect(() => {
    //     getMovies();
    // }, [movieList]);
    return (
        <div>
            <ul>
                {
                    movieList.map((el, idx) => <ListItem key={idx} el={el} />)
                }
            </ul>
        </div>
    );
};

export default List;