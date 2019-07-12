let http=require('http')
let fs=require('fs')

/*function hellp(req,res) {
    console.log('request received')
    fs.readFile('hell.html',function (err,data) {

if (err){
    console.log("error created")
    res.end('server down')
  }

else {
    res.write(data)
    res.end()
}



    })*/

fs.readFile('hello.html',function (err,data) {

    if(!err){
        http.createServer(function (req,res) {
            res.write(data)
            res.end()

        }).listen(3000)



    }



})





