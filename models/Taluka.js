let Database = require("./Database");

class Taluka{
    id = 0;
    districtid=0;
    name = "";
  
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.districtid=0;
        this.name ="";
       
        
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO talukas(id, name, districtid)  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.name +"','"+ this.districtid +"')"; 
        }
        else {
            this.query = "UPDATE talukas SET id="+ this.id +",name='"+ this.name+",districtid='"+this.districtid+"' WHERE id=" + this.id;
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
    get=()=>{
        this.query = "SELECT * FROM talukas WHERE id = "+this.id;
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
    list=()=>{
        this.query =  "SELECT * FROM talukas ";
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
    delete=()=>{
        this.query = "DELETE FROM talukas  WHERE id = "+this.id+"";

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
    Taluka:Taluka
}