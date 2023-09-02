const express = require('express')
const app = express()
const port = 3000
const formatController = require('./formatController')
//驗證服務是否存活
app.get('/api/live',(req,res)=>{
  return res.send('Alive')
})

app.get('/api/format',async (req,res)=>{
  try{
    const data =await formatController.calculate(req)
    return res.status(200).send({
      msg:"success",
      amount:data
    })
  }catch(err){
    return res.status(500).send({
      msg: err.message
    })
  }
})


app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})