import express from 'express';
import noticeRouter from "./api/notice.js";
import noticeService from "./notice.service.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/notice', noticeRouter)
app.use('/api/reset', (req, res) => {
	noticeService.clearNotice()
	res.send({message: "Notice cleared"})
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
