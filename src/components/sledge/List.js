import React, {  useEffect, useState } from 'react';
import axios from 'axios'
import { SLEDGE_KEY } from 'assets/data/data';
import ListItem from './ListItem';
import Loading from 'components/common/Loading';
import Pagination from 'components/common/Pagination';

const List = () => {
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [filteredList, setFilteredList] = useState([]);
    const [pIndex, setPIndex] = useState(1);
    const pSize = 1000;
    const showingSize = 5;
    const menuArr = [
        { name: '전체', cate: 'all' },
        { name: '영업 중인 썰매장', cate: 'open' },
    ];
    const [selectedMenu, setSelectedMenu] = useState('all');

    const filterTab = (cate) => {
        setSelectedMenu(cate);
    };
    useEffect(() => {
        setPIndex(1);
        axios.get(`https://openapi.gg.go.kr/Sledge?key=${SLEDGE_KEY}&type=json&pSize=${pSize}`)
            .then((response) => {
                const dataList = response.data.Sledge[1].row;
                if (selectedMenu === 'all') {
                    setFilteredList(dataList);
                    setTotal(dataList.length);
                    setLoading(false);
                }
                if (selectedMenu === 'open') {
                    const newList = dataList.filter((el) => el.BSN_STATE_NM === '영업중');
                    setTotal(newList.length)
                    setFilteredList(newList);
                }
            }).catch(err => console.log(err));
    }, [selectedMenu]);
    return (
        <div>
            {loading ? 
                <Loading />  :
                <>
                    <div className='sledgeListNav flex'>
                        <div className='sledgeListTab'>
                            {
                                menuArr.map((el, idx) => <span className={`${selectedMenu === el.cate ? 'on' : ''}`} onClick={() => filterTab(el.cate)} key={idx}>{el.name}</span>)
                            }
                        </div>
                        <span className='totalArea'>
                            총 {total} 곳
                        </span>
                    </div>
                    <div>
                        <div className='sledgeList'>
                            {filteredList.map((el, idx) => idx >= showingSize * (pIndex - 1) && idx < showingSize * (pIndex) && <ListItem key={idx} el={el} idx={idx} showingSize={showingSize} pIndex={pIndex} />)}
                        </div>
                        <Pagination selectedMenu={selectedMenu} pIndex={pIndex} setPIndex={setPIndex} showingSize={showingSize} total={total} />                    
                    </div>
                </> 
            }
        </div>
    );
};

export default List;