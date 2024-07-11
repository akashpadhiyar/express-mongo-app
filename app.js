const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res) => {
    //res.send('About')
    res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})
app.get('/process', (req, res) => {
   
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var c = parseInt(no1) + parseInt(no2);

    var d = "";
    if(c>30){
        d = "style='border-color':'red'";
    }else{
        d = "style='border-color':'blue'";
        
    }

    var msg = `<table border='1' ${d}> 
    <tr>
    <th>Title</th>
    <th>Value</th>
    </tr>
    <tr>
        <td>No1</td>
        <td>${no1}</td>
    </tr>
    <tr>
        <td>No2</td>
        <td>${no2}</td>
    </tr>
    <tr>
        <td><b>Sum</b></td>
        <td><b>${c}</b></td>
    </tr>
    </table>`

    res.send(msg)
    
    
})



app.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    res.send('ID is' + id);
})
app.get('/search/', (req, res) => {
    var q = req.query.q;
    res.send('Search is '+q);
})


app.get('/cake', (req, res) => {
    res.send('Cake')
})

app.get('/cake/ahmedabad', (req, res) => {
    res.send('Cake Ahmedabad')
})

app.get('/cake/rajkot', (req, res) => {
    res.send('Cake Rajkot')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})