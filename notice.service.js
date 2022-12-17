import {v4 as uuid} from "uuid";

let notice = []

const addNotice = (message) => {
	notice.push({...message, date: new Date(), id: uuid()})
	return notice.at(-1);
}

const getNotice = () => {
	return notice
}

const clearNotice = () => {
	notice = []
}

const likeNotice = (id) => {
	const foundNotice = notice.find((notice) => notice.id === id)
	if(!foundNotice) return null
	foundNotice.likes += 1
	return foundNotice
}

const getNoticeById = (id) => {
	const foundNotice = notice.find((notice) => notice.id === id)
	return foundNotice;
}

const noticeService = {
	addNotice,
	getNotice,
	clearNotice,
	likeNotice,
	getNoticeById
}

export default noticeService
