const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('서버가 작동중입니다.');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: '철수'},
        { id: 2, name: '영희'}
    ];
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body; // 사용자가 보낸 데이터가 담기는 곳
    console.log(`newUser`);

    res.status(201).json({
        message: '유저가 성공적으로 생성되었습니다.',
        user: newUser
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});