alert("Xin chào")
function CF(){
    do{
    var Fullname = prompt("Cho mình xin họ tên của bạn");
    var Age = confirm("Bạn đã đủ 10 tuổi để đặt bánh chưa??");
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    }while(Fullname.length <= 10 && Fullname == format && Age === true ){
        if(Fullname === "Ngô Thanh Phong"){
            alert(`Xin chào bạn nha : ${Fullname}`);
        }else{
            alert("Xin chào bạn " + `${Fullname}`)
        }
            
    }
}
CF();
//Vòng lập do while có cấu tạo như sau : 
//Do { Những yêu cầu cần phải thực hiện}
//While(Điều kiện để dừng vòng lập ){
// Nếu như điều kiện đúng thì không thực hiện các câu lệnh bên dưới nữa mà quay lại các câu lệnh ở trên
// Như ví dụ ở trên là fullName nếu như lớn hơn 10 và ko chưa các ký tự của formart thì chắc chắn sẽ bắt nhập lại thêm lần nữa