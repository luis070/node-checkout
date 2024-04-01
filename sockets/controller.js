const socketController = (socket) => {

    console.log('clente conectado ', socket.id);

    socket.on('disconnect', () =>{
        console.log('cliente desconectado ', socket.id);
    })
    //el payload es el argumento 
    socket.on('enviar-mensaje', (payload, callback) => {
        // console.log(payload);
        //este no aplica aqui porque no existe el io pero se puede usar socket en su lugar
        //this.io.emit('enviar-mensaje', payload);
        //aqui hay algo curisos es que cuando esta funcion estaba en el archivo server y usabas el io
        //el socket enviaba la informacino a todos por lo que aqui es neceseario agregar broadcast
        socket.broadcast.emit('enviar-mensaje', payload);


        const id = 12345;
        //el callback es una funcion como una respuesta del fin de la funcion en este caso regresa id
        //esto es muy util porque con el socket normal contesta a todos los conectados y con esto 
        //solamente contesta al que llamo y no a todos esto te daras cuenta si lo pracitcas otra vez
        //
        callback(id);
    })
}

module.exports = {
    socketController,
}