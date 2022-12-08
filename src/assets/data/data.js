const MOVIES_KEY = '667a35a473f8a10ab9c910301873b7a4';
const SLEDGE_KEY = '9c806e1f1b644b7f985b371d97a8269d';
const MAP_KEY = '5a1b180570b5722439d2e28b69e69d91';
const getDt = () => {
    const fullDigit = (num) => {
        return num < 10 ? '0' + num : num;
    }
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = fullDigit(newDate.getMonth());
    const date = fullDigit(newDate.getDate());
    return `${year}${month}${date}`;
}
const TARGET_DT = getDt();  // 영화에 필요한 YYYY-MM-DD

export {MOVIES_KEY, SLEDGE_KEY, TARGET_DT, MAP_KEY}