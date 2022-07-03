alert("Xin chào")
function CF(){
    do{
    var Fullname = prompt("Cho mình xin họ tên của bạn");
    var Age = confirm("Bạn đã đủ 15 tuổi để đặt bánh chưa??");
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    }while(Fullname <= 10 && Fullname !== format && Age<=15){
       if(Fullname <= 10 && Fullname !== format && Age<=15){
            Fullname = prompt("Cho mình xin lại tên nha");
            Age = confirm("Chắc là không đủ hong??");
       }else{
           break;
       }
        
    }
}
CF();