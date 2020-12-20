
function hide(){
   document.getElementsByClassName("box").style.display ="none";

}










function calculateAge(){
   let birthDate =document.getElementById('birthDate').value;

    // let d = new Date(birletate);

    

    document.getElementById('btnNewBirthdate').style.display = "block";
    document.getElementById('ageText').style.display = "block";

        let mdate = birthDate.toString();
        let yearThen = parseInt(mdate.substring(0,4), 10);
        let monthThen = parseInt(mdate.substring(5,7), 10);
        let dayThen = parseInt(mdate.substring(8,10), 10);
        
        let today = new Date();
        let birthday = new Date(yearThen, monthThen-1, dayThen);
   
        let differenceInMilisecond = today.valueOf() - birthday.valueOf();
  
        
        let year_age = Math.floor(differenceInMilisecond / 31536000000);
        let day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy BirthDay !!! ");
        }
        
        let month_age = Math.floor(day_age/30);
        
        day_age = day_age % 30;
        
        let tMnt= (month_age + (year_age*12));
        let tDays =(tMnt*30) + day_age;
    

        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            document.getElementById("age").innerHTML = ("Invalid Birth Date <br/> - Please Enter Valid Date");
        }
        else {
            document.getElementById("age").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
            + "<br/> "
            + "<br/> In MONTHs :<br/> " 
            + tMnt + " months " + day_age + " days" 
            + "<br/> "
            + "<br/> In DAYs :<br/>" 
            +  tDays + " days" 
            + "<br/> "
            + "<br/> In HOURs: <br/>" 
            +  tDays*24 + " hours" 
            + "<br/> "
            + "<br/> In SECONDs: <br/>" 
            +  tDays*24*3600 + " seconds" 
            + "<br/> "
            + "<br/> In MILLISECONDs: <br/>" 
            +  tDays*24*3600*1000 + " miliseconds" ;
        }
      

}