const express = require('express');
const app = express();

import { createTodo, updateTodo } from "./types";

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong input !",
        })
        return;
    }
 })

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong input !",
        })
    }
})

app.listen(3000);