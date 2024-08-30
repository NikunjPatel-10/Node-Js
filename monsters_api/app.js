// const express = require('express');
// const bodyParser = require('body-parser');
// const monsters = require('./routes/monsters');
// const habitats = require('./routes/habitats')
// // const pool = require('./db')

// const app = express();

// app.use(bodyParser.json());
// app.use('/monsters', monsters);
// app.use('/habitats', habitats)



// app.use((err, req, res , next)=>{
//     res.json(err)
// })

// const port = 3000;

// app.listen(port, ()=> console.log(`listening on port ${port}`));

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json()); // To parse JSON request bodies

// Endpoint to create a folder (including nested folders)
app.post('/create-folder', (req, res) => {
  const { parentFolder, newFolderName } = req.body;
  const folderPath = path.join(__dirname, 'static', parentFolder, newFolderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    res.status(200).json({ message: 'Folder created successfully' });
  } else {
    res.status(400).json({ message: 'Folder already exists' });
  }
});

// Endpoint to get the contents of a specific folder
app.get('/get-folder-contents', (req, res) => {
  const folderPath = path.join(__dirname, 'static', req.query.folderPath || '');

  if (fs.existsSync(folderPath)) {
    const contents = fs.readdirSync(folderPath).map(item => {
      const itemPath = path.join(folderPath, item);
      return {
        name: item,
        isDirectory: fs.statSync(itemPath).isDirectory(),
      };
    });
    res.status(200).json(contents);
  } else {
    res.status(404).json({ message: 'Folder not found' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
