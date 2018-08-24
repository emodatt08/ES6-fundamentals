"use  strict"

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
 
    /**
    * static function
    */
    static countUsers(){
        return 'The first user is ';
    }

    /**
    * Normal function/method
    */
     registerUser(){
         alert(this.username + " is now registered");
     }
}


class Member extends User{
    constructor(username, password, memberPackage){
        super(username, password);
        this.package = memberPackage;
    }
  

    getFirstMember(){
        alert(User.countUsers() + this.username);
    }

    getPackage(){
        alert(this.username + " has subscribed to MTN Mobile Money "+ this.package +" package ");
    }

}

let sadat = new Member('Sadat Hillary','SmartOne', 'Standard');
sadat.registerUser();
sadat.getPackage();