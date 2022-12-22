const userName = /^[가-힣]*$/;
const userPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const userEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
const regex = {userName, userPw, userEmail}
export default regex;