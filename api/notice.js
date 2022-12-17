import {Router} from "express";
import noticeService from "../notice.service.js";
import {v4 as uuid} from "uuid"

const noticeRouter = Router();

noticeRouter.get('/', (req, res) => {
	res.send({data: noticeService.getNotice()});
})

noticeRouter.post('/', (req, res) => {
	const {author, message} = req.body
	if (!author) return res.status(400).send({message: "Author is required"})
	if (!message) return res.status(400).send({message: "Message is required"})
	const newNotice = {
		author,
		message,
		date: new Date(),
		likes: 0
	}
	const savedNotice = noticeService.addNotice(newNotice)
	res.status(201).send(savedNotice)
})

noticeRouter.get('/:id', (req, res) => {
	const {id} = req.params
	const foundNotice = noticeService.getNoticeById(id)
	if (!foundNotice) return res.status(404).send({message: "Notice not found"})
	res.send(foundNotice)
})

noticeRouter.put('/:id/like', (req, res) => {
	const notice = noticeService.likeNotice(req.params.id)
	if (!notice) return res.status(404).send({error: "Notice not found"})
	res.send(notice)
})

export default noticeRouter;
