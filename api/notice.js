import {Router} from "express";
import noticeService from "../notice.service.js";


const noticeRouter = Router();

noticeRouter.get('/', (req, res) => {
	res.send({data: noticeService.getNotice()});
})

noticeRouter.post('/', (req, res) => {
	const {author, message} = req.body
	if(!author) return res.status(400).send({message: "Author is required"})
	const newNotice = {
		author,
		message,
		likes: 0
	}
	noticeService.addNotice(newNotice)
	res.status(201).send(newNotice)
})

noticeRouter.put('/:id/like', (req, res) => {
	const notice = noticeService.likeNotice(req.params.id)
	if(!notice) return res.status(404).send({error: "Notice not found"})
	res.send(notice)
})

export default noticeRouter;
