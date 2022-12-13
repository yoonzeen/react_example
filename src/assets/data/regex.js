const userName = /^[가-힣]*$/;
const userPw = /^\d{0,5}$/;
const userEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
const regex = {userName, userPw, userEmail}
export default regex;