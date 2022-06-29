const express = require('express')
const app = express()
const PORT = 8000

const animals = {
    'tater': {
        'name': 'Tater',
        'species': 'Dog',
        'breed': 'Wirehair Pointing Griffon',
        'color': 'White-Brown-Grey',
        'nicknames': 'Tater Tot, Terror Tot, TT'
    },
    'coco': {
        'name': 'Coco',
        'species': 'Dog',
        'breed': 'Weiner Dog and Schnauzer',
        'color': 'Black and Brown',
        'nicknames': 'The Nut'

    },
    'freddie': {
        'name': 'Freddie',
        'species': 'Cat',
        'breed': 'Tabby Shorthair',
        'color': 'Brown and grey and white',
        'nicknames': 'KIKI'
    },
    'mitzi': {
        'name': 'Mizi',
        'species': 'Dog',
        'breed': 'German Wirehair Pointer',
        'color': 'White and Brown',
        'nicknames': 'Bop Bop'

    },
    'unknown': {
        'name': 'unknown',
        'species': 'unknown',
        'breed': 'unknown',
        'color': 'unknown',
        'nicknames': 'unknown'

    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const petName = request.params.name.toLowerCase()
    if(animals[petName]) {
        response.json(animals[petName])
    }
    else {
        response.json(animals['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The Server is no running on port ${PORT}!`)
})
