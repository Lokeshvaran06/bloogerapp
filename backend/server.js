const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'));


mongoose.connect('mongodb+srv://blogger:bharani06@bloggerapp.ugqqr86.mongodb.net/?retryWrites=true&w=majority&appName=bloggerapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

const BlogPost = mongoose.model('BlogPost', new mongoose.Schema({
  title: String,
  author: String,
  date: { type: Date, default: Date.now },
  content: String,
  image: String,
  comments: [{ author: String, text: String, date: { type: Date, default: Date.now } }]
}));

// Routes
app.get('/posts', async (req, res) => {
  const posts = await BlogPost.find();
  res.send(posts);
});

app.get('/posts/:id', async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.send(post);
});

app.post('/posts', upload.single('image'), async (req, res) => {
  const newPost = new BlogPost({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    image: req.file ? req.file.path : '',
  });
  await newPost.save();
  res.send(newPost);
});

app.post('/posts/:id/comments', async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  post.comments.push(req.body);
  await post.save();
  res.send(post);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
