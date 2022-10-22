const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('pls god help')
})

app.get('/getname', (req,res) => { 
    res.send('Patchaporn Siththichoi')
})

app.get('/getprofile', (req,res) => { 
    let data = {
        name :'Patchaporn Siththichoi',
        age: 19,
        apocalypase: 'Summertime sadness',
        detail : 'My nickname is Jenny. I am nineteen years old. I was born on the twenty two of May 2003.'
    }
    res.send(data)
})

app.get('/getabout', (req,res) => { 
    let data = {
        name :'Patchaporn Siththichoi',
        age: 19,
        email: 'patchaporn.sith@bumail.net',
        address : 'BU'
    }
    res.send(data)
})

app.get('/getproject', (req,res) => { 
    let data = {
        project_name: 'ROV',
        project_description: 'Arena of Valor : 4 August 2022',
        project_link: 'https://www.youtube.com/watch?v=dcu247sKtro'
    }
    res.send(data)
})

app.get('/getcontact', (req,res) => { 
    let data = {
        address: 'BU',
        email: 'patchaporn.sith@bumail.net',
        phone_number:  '094-854-2277'
    }
    res.send(data)
})



app.listen(3000, () => {
    console.log('start sever at port 3000.')
})