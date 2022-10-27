const express = require('express')
const app = express()
const port = 5000
const courses = require('./data/courses.json')
const catagories = require('./data/catagory.json');
const cors = require('cors')
app.use(cors())
app.get('/course/:id', (req, res) => {
    const CatagoryId = req.params.id;
    const catagoryCourse = courses.find(singlecourse => singlecourse.id === req.params.id);
    res.send(catagoryCourse)

})
app.get('/courses/:id', (req, res) => {
    const CatagoryId = req.params.id;
    if (CatagoryId === 'all') {
        res.send(courses);
    }
    else {

        const catagoryCourses = courses.filter(c => c.catagory === req.params.id);
        res.send(catagoryCourses)
    }
})
app.get('/allcourses', (req, res) => {
    res.send(courses)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})