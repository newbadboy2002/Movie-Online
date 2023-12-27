function checkform(){
    var user =document.getElementById("user");
    var pass =document.getElementById("pass");
    if(user.value != ""){
        if(user.value.length < 8){
            alert("Vui lòng nhập nhiều hơn 7 kí tự");
            user.focus();
            return false;
        }
    }else{
        alert("Nhập tên đăng nhập dùm!");
        user.focus();
        return false;
    }

    if(pass.value != ""){
        if(pass.value.length < 6){
            alert("Vui lòng nhập nhiều hơn 6 kí tự");
            pass.focus();
            return false;
        }  
    }else{
        alert("Nhập mật khẩu dùm!");
        pass.focus();
        return false;
    }

if(checkform() == true)
{
    window.location ="homePage.html"
}
}