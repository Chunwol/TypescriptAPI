import * as express from "express"
class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}
const app = new App().application;
app.listen(3000,()=>console.log("port 3000 server start"));

interface InfoValue {
  status: number;
  message: string;
  more_info: string;
}

class Info implements InfoValue {
  constructor (
    public status: number,
    public message: string,
    public more_info: string
  ) { }
}
app.get("/",(req : express.Request , res : express.Response) =>{
    const info = new Info(200,'Success','Main Page');
    res.status(200).json(info);
})
app.get("/error",(req : express.Request , res : express.Response) =>{
  const info = new Info(404 ,'Error','Error Page');
  res.status(200).json(info);
})