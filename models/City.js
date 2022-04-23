let Database = require("./Database");

class City{
    id = 0;
    name = "";
    talukaid = 0;
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name ="";
        this.talukaid=0;
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO cities(id, name, talukaid)  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.name +"','"+ this.talukaid +"')"; 
        }
        else {
            this.query = "UPDATE cities SET id="+ this.id +",name='"+ this.name+",talukaid='"+this.talukaid+"' WHERE id=" + this.id;
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
        this.query = "SELECT * FROM cities WHERE id = "+this.id;
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
        this.query =  "SELECT * FROM cities ";
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
        this.query = "DELETE FROM cities  WHERE id = "+this.id+"";

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
    City:City
}