let Database = require("./Database");

class States{
    id = 0;
    name = "";
  
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name ="";
       
        
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO states(id, name)  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.name +"')"; 
        }
        else {
            this.query = "UPDATE states SET id="+ this.id +",name='"+ this.name+"' WHERE id=" + this.id;
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
        this.query = "SELECT * FROM states WHERE id = "+this.id;
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
        this.query =  "SELECT * FROM states ";
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
        this.query = "DELETE FROM states  WHERE id = "+this.id+"";

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
    States:States
}