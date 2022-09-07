const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    // res.render('news')
    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts`)
        res.render('news', { articles: newsAPI.data })
            // console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.error('Error', err.message);
        }
    }
})

newsRouter.get('/:id', async(req, res) => {
    let articleID = req.params.id
        // res.render('news')
    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`)
        res.render('newsDetails', { article: newsAPI.data })
            // console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            // res.render('newsDetails', { article: newsAPI.data })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // res.render('newsDetails', { article: newsAPI.data })
            console.log(err.request)
        } else {
            // res.render('newsDetails', { article: newsAPI.data })
            console.error('Error', err.message);
        }
    }
})

newsRouter.post('', async(req, res) => {
    let search = req.body.search
        // res.render('news')
    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', { articles: newsAPI.data })
            // console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            res.render('newsSearch', { articles: newsAPI.data })
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            res.render('newsSearch', { articles: newsAPI.data })
            console.log(err.request)
        } else {
            res.render('newsSearch', { articles: newsAPI.data })
            console.error('Error', err.message);
        }
    }
})

module.exports = newsRouter 