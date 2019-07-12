let http=require("http")


        http.createServer(function (req,res) {
            res.write("sampleReqRes");
            res.end();

        }).listen(3004)



