import * as path from "path";
import * as fs from "fs";

const dataFile = path.join(__dirname, "../../data/db.json")

export const AssignModel = {

  getAll(callback: any) {
    console.log("MODEL: getAll fired")
    fs.readFile(dataFile, (err,data)=> {
      if(err){
        throw err;
      }else{
        console.log("MODEL: no error in getAll")
        callback(err, data);
      }
    })
  },

  postAssignment(assignment: any, callback: any){
    console.log("MODEL: postAssignment fired");
    fs.writeFile(dataFile, JSON.stringify(assignment), (err) =>{
      if(err){
        throw err;
      }else {
        console.log("MODEL: no error in postAssignment");
        callback(err);
      }
    })
  }
}