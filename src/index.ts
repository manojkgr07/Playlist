import  Express, { urlencoded }  from "express";
import { url } from "inspector";

const app = Express();

app.get("/",(req,res) => {
    res.send("<h1>Welcome to Node js Playlist Project modified</h1>");
});

app.use(Express.json());

app.use(urlencoded({extended:false}));

app.listen(8000,()=>{
    console.log("Running on the port")
})