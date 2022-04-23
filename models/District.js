let Database = require("./Database");

class District{
    id = 0;
    name = "";
    stateid = 0;
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name ="";
        this.stateid=0;
    }
    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO districts(id, name, stateid)  ";
           this.query+= "VALUES ("+ this.id +",'"+ this.name +"','"+ this.stateid +"')"; 
        }
        else {
            this.query = "UPDATE districts SET id="+ this.id +",name='"+ this.name+",stateid='"+this.stateid+"' WHERE id=" + this.id;
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
        this.query = "SELECT * FROM districts WHERE id = "+this.id;
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
        this.query =  "SELECT * FROM districts ";
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
        this.query = "DELETE FROM districts  WHERE id = "+this.id+"";

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
    District:District
}