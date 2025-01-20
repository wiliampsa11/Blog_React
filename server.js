const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;



const articlesInfo = {
    "learn-react": {
        comments: []
    },
    "learn-node": {
        comments: []
    },
    "my-thoughts-on-learning-react": {
        comments: []
    },
}

// Initialize middleware
// We use to have to install body parser but now it is a built in middleware 
// Function of exress. It parses incoming JSON payload
app.use(express.json({extended: false}));


app.post('/api/articles/:name/add-comments', (req,res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text})
    res.status(200).send(articlesInfo[articleName]);
})


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

