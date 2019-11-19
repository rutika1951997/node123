var express=require("express");
var emprouter=express();
var mysql=require("mysql");

const connection = mysql.createConnection({
    host : 'localhost',
    user     :  'root',
    password : 'Manager',        
    database : 'mean'

})

var myData=[];
connection.connect();

emprouter.get("/",function(request,response){
    connection.query('select * from emp',function(err,result){
        if(err==null)
        {
            response.contentType("application/json");
            response.send(result);
        }
        else
        {
            response.send(err);
            console.log("something went wrong");
        }
    });

});


emprouter.get("/:no",function(request,response){
    let eno= parseInt(request.params.no);
    connection.query(`select * from emp where no=${eno}`,function(err,result){
        if(err==null)
        {
            response.contentType("application/json");
            response.send(result);

        }
        else
        {
            response.send(err);
        }
    });
});

emprouter.delete("/:no",function(request,response){
    let eno= parseInt(request.params.no);
    connection.query(`delete from emp where no=${eno}`,function(err,result){
        if(err==null)
        {
            response.contentType("application/json");
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(err);
        }
    });

});

emprouter.put(":no",function(request,response){
    let eno=parseInt(request.params.no);
    let ename=request.body.name;
    let eaddress=request.body.address;
    connection.query(`update emp set name='${ename}',address='${eaddress}' where no=${eno}`,function(){
        if(err,result)
        {
            response.contentType("application/json");
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(err);
        }
    });
});

emprouter.post("/",function(request,response){

    let eno=parseInt(request.body.no);
    let ename=request.body.name;
    let eaddress=request.body.address;
    connection.query(`insert into emp values(${eno},'${ename}','${eaddress}')`,function(err,result){
        if(err==null)
        {
            response.contentType("application/json");
            response.send(result);
        }
        else
        {
            response.send(err);
        }
    });
});
module.exports=emprouter;