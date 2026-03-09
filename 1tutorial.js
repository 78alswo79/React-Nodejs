
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


// 미션 1: "데이터를 기다리는 식당" (기초)
// 서버에서 데이터를 받아오는 함수를 만들고, await를 사용하여 데이터가 도착할 때까지 기다렸다가 출력해 보세요.
// 상황: fetchUser 함수는 1초 뒤에 { id: 1, name: '민재' }라는 객체를 줍니다.
// 할 일: async/await를 사용하여 데이터가 도착하면 사용자 이름은: 민재라고 출력하는 함수를 짜보세요.
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: '민재'};
            if (1) {
                resolve(`사용자 이름은: ${user.name}`);
            } else {
                reject('서버에서 데이터를 가져오지 못했습니다.');
            }
        }, 2000);
    });
}

// 즉시실행 함수
(async() => {
    try {
        const reFetchUser = await fetchUser();
        console.log(reFetchUser);
    } catch (error) {
        console.error(error);
    }
})();

// 고전적인 방법
fetchUser().then(result => {
    try {
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}) 

// 권장패턴
const excuteMethod = async () => {
    try {
        const result = await fetchUser();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

excuteMethod();

// 미션 2: "순서대로 요리하기" (중급 - 비동기의 순차적 실행)
// 비동기 작업이 여러 개일 때, 어떻게 순서를 보장하는지 익히는 미션입니다.

// 상황: 1단계(재료 준비, 1초) → 2단계(요리, 2초)가 있습니다.

// 할 일: await를 써서 [재료 준비 시작] → [1초 뒤] → [요리 시작] → [2초 뒤] → [요리 완성] 순서로 출력되게 만들어 보세요.

// 미션 3: "실패했을 때 대처하기" (고급 - 에러 처리)
// 서버 통신은 항상 성공할 수 없습니다. 이때 프로그램이 죽지 않게 하는 try...catch를 연습합니다.

// 상황: 서버가 가끔 에러를 냅니다(throw new Error(...)).

// 할 일: try { ... } catch (error) { ... } 문법을 사용하여, 에러가 발생하면 "에러가 발생했습니다: [에러 내용]"이라고 우아하게(?) 출력하도록 코드를 수정해 보세요.
const getDelay = (ms, message, success = true) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) { resolve(message); }
            else { reject(new Error(`[Error] : ${message}를 실행하는데 오류가 발생했습니다.`)); }
        }, ms);
    });
}

const excuteMethod2 = async() => {
    try {
        const result1 = await getDelay(0, '[재료 준비 시작]');
        console.log(result1);
        const result2 = await getDelay(1000, '[1초 뒤]');
        console.log(result2);
        const result3 = await getDelay(0, '[요리 시작]');
        console.log(result3);
        const result4 = await getDelay(2000, '[2초 뒤]');
        console.log(result4);
        const result5 = await getDelay(0, '[요리 완성]');
        console.log(result5);
    } catch (error) {
        console.error(error);
    }
}
excuteMethod2();
