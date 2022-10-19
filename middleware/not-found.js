const notFoundMiddleware = (req,res) =>{
    if(res.status(404)){
        res.send("Route does not exist!")
    }
}

export default notFoundMiddleware