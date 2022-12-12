import {v4 as uuid} from "uuid";

let notice = []

const addNotice = (message) => {
	notice.push({...message, date: new Date(), id: uuid()})
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

const noticeService = {
	addNotice,
	getNotice,
	clearNotice,
	likeNotice
}

export default noticeService
