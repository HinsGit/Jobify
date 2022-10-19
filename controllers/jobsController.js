

//All the function is async because it's communicating with our db
const createJob = async(req,res) =>{
    res.send("create job")
}
const deleteJob = async(req,res) =>{
    res.send("delete job")
}
const getAllJobs = async(req,res) =>{
    res.send("get all job")
}
const updateJob = async(req,res) =>{
    res.send("update job")
}
const showStats = async(req,res) =>{
    res.json({"stats":"show stats"})
}

export {createJob,deleteJob,getAllJobs,updateJob,showStats}