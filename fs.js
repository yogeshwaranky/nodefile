import express from "express";
import * as fs from "fs"

const app = express();
const PORT = 4000;

let info = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + info.getDate()).slice(-2);

// current month
let month = ("0" + (info.getMonth() + 1)).slice(-2);

// current year
let year = info.getFullYear();

// current hours
let hours = info.getHours();

// current minutes
let minutes = info.getMinutes();

// current seconds
let seconds = info.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
const timestamp = `DATE : ${year}-${month}-${date}  TIME: ${hours}:${minutes}:${seconds}`;

console.log(timestamp);

app.get("/", (req, res) => {
    res.send("Hi.....This is yogi❤🎉")
})

//To create a current timestamp in a file//
app.get("/create", function (req, res) {
    res.send({ message: "File is created successfully ! You can check it in vs code" });
    fs.writeFile("./date-time.txt", timestamp, (data, err) => {
        if (data) {
            console.log("File created successfully");
        }
        else if (err) {
            console.log("Error Occured", err);
        }
    });
});


//To delete the current timestamp in the file//
app.get("/delete", function (req, res) {
    res.send({ message: "File is Deleted successfully ! You can check it in vs code" })
    fs.unlink("./date-time.txt", (err) => {
        console.log("Deleted the file");
    })
})

//To show the content of the file//
app.get("/show", function (req, res) {
fs.readFile("./date-time.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error occured",err);
    }
    else{
        res.send(data);
}
});
 })


//To enable the server//
app.listen(PORT, () => console.log("server started on the port ", PORT));