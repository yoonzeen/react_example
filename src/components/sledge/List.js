import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SLEDGE_KEY } from 'assets/data/data';
import ListItem from './ListItem';
import Loading from 'components/common/Loading';
import Pagination from 'components/common/Pagination';

const List = () => {
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [sledgeList, setSledgeList] = useState([]);
    const [pIndex, setPIndex] = useState(1);
    const pSize = 5;
    useEffect(() => {
        const sledgeApi = async () => {
            await axios.get(`https://openapi.gg.go.kr/Sledge?key=${SLEDGE_KEY}&type=json&pIndex=${pIndex}&pSize=${pSize}`)
                .then((res) => {
                    setTotal(res.data.Sledge[0].head[0].list_total_count);
                    setSledgeList(res.data.Sledge[1].row);
                    setLoading(false);
                    console.log(res);
                }).catch((error) => console.log(error));
        };
        if(pIndex) sledgeApi();
    }, [pIndex]);
    return (
        <div>
            {loading ? 
                <Loading />  :
                <>
                    <div className='sledgeListNav flex'>
                        <div className='sledgeListTab'>
                            <span>전체</span>
                            <span>영업 중인 썰매장</span>
                            <span>공립</span>
                            <span>사립</span>
                        </div>
                        <span className='totalArea'>
                            총 {total} 곳
                        </span>
                    </div>
                    <div className='sledgeList'>
                        {sledgeList.map((el, idx) => <ListItem key={idx} el={el} idx={idx} pSize={pSize} pIndex={pIndex} />)}
                    </div>
                    <Pagination pIndex={pIndex} setPIndex={setPIndex} pSize={pSize} total={total} />
                </> 
            }
        </div>
    );
};

export default List;