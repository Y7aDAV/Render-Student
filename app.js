const express = require("express");
const { stat } = require("node:fs");
const { env } = require("node:process");
const { getEnvironmentData } = require("node:worker_threads");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
    Message:"Student API running successfully",
    Environment: process.env.NODE_EV || "development"
    });

    app.get("/health",(req,res)=>{
        res.status(200).json({
            status:"OK"
        });
    });

    app.get("/student",(req,res)=>{
        const students = [
            {id:1,name:"akash",course:"Node.js"},
            {id:2,name:"Rahul",course:"java"},
            {id:3,name:"Swetha",course:"Python"},
        ];
        res.json(students);
    })

});


app.post("/students", (req, res) => {
    const { name, course } = req.body;

    res.status(201).json({
        message: "Students received successfully",
        student: { name, course }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log("Server running...");
});
