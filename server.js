server.listen(8080, () => console.log('Server Up'))

const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('Bienvenidos a mi 3er entrega de <h1 style="color:blueviolet">BACKEND!</h1>')
})

app.get('/cursos', (request, response) => {
    response.send({
        message: 'success',
        data: [
            { id: 1, name: 'Backend', teacher: 'Pedro Gandulfo Gomez' },
            { id: 2, name: 'ReactJs', teacher: 'Gilda Martinez' },
            { id: 3, name: 'Angular', teacher: 'Jose Justo Mackay' },
            { id: 4, name: 'MongoDB', teacher: 'Zavitar Fernandez'}
        ]
    })
})

app.get('/saludo/:name/:lastname', (request, response) => {
    const name = request.params.name    //URL Params
    const lastname = request.params.lastname    //URL Params
    response.send(`Hola ${name} ${lastname}`)
})

app.get('/alumnos', (request, response) => {
    const id = request.query.id //Query Params
    const alumnos = [
        {id: 1, name:'Felipe'},
        {id: 2, name:'Juan'},
        {id: 3, name:'Martin'},
        {id: 4, name:'Alfonso'},
    ]
    const result = alumnos.find(item => item.id == id)
    response.send(`Como estas ${result.name}`)
})

app.listen(8080, () => console.log('Server Up'))