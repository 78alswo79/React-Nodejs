const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const users = [
    { id: 1, name: '철수'},
    { id: 2, name: '영희'},
    { id: 3, name: '기모찌'}
];

app.get('/', (req, res) => {
    res.send('서버가 작동중입니다.');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }; // 사용자가 보낸 데이터가 담기는 곳

    users.push(newUser);

    res.status(201).json({
        message: '유저가 성공적으로 생성되었습니다.',
        user: newUser
    });
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    debugger;
    console.log(`${userId}번 유저를 다음 내용으로 수정:`, updatedData.id);
    res.json({ message: `${userId}번 유저 수정 완료!`, updatedData });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    console.log(`${userId}번 유저 삭제 요청 받음`);
    res.json( {message: `${userId}번 유저가 삭제되었습니다.`} );
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});