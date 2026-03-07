
// # [🔥 직접 해보기 미션]
// # 위 코드의 user 객체에 age: 25를 추가해 보세요.
// # printUserInfo 함수를 수정해서 **나이(age)**도 함께 출력되도록 만들어 보세요.
// # 만약 role이 "Admin"이면 "관리자님 환영합니다"라고 출력하는 if문을 함수 안에 넣어보세요.

let user = {name: '이민재', age: 3};
let adminUser = {name : 'Admin', age: 15};

let {name:userName, age:userAge} = user;
let {name:adminName, age:adminAge} = adminUser;


const printUserInfo = (user) => {
    console.log('화살표 함수 추가!');
    if (user.name === 'Admin') { return console.log("관리자님 환영합니다"); }
    console.log(`name: ${userName}, age: ${userAge}`);
}

printUserInfo(user);
printUserInfo(adminUser);
