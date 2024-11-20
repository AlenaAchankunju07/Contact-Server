const jsonServer = require('json-server')

const CServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')

CServer.use(middleware)
CServer.use(route)

CServer.listen(PORT,()=>{
    console.log(`cServer started at PORT : ${PORT} and waiting for client request `);
    
})