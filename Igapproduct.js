let Database = require("./Database");

class Igapprduct {
    id = 0;
    name = "";
    picpath = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name = "";
        this.picpath = "";
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO igapproductcategories(id, name, picpath)  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.name +"','"+ this.picpath +"')"; 
        }
        else {
            this.query = "UPDATE igapproductcategories SET id="+ this.id +",name='"+ this.name+"',picpath='"+ this.picpath +"' WHERE id=" + this.id;
        }
       console.log(this.query);
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

}
module.exports={
    Igapprduct:Igapprduct
}