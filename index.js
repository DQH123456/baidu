function checkForm(){ 
    var nametip = checkUserName(); 
    var passtip = checkPassword();  
    var conpasstip = ConfirmPassword(); 
    var phonetip = checkPhone(); 
    return nametip && passtip && conpasstip && phonetip; 
    } 
    //验证用户名   
    function checkUserName(){ 
    var username = document.getElementById('userName'); 
    var errname = document.getElementById('nameErr'); 
    var pattern = /^\w{3,}$/;  //用户名格式正则表达式：用户名要至少三位 
    if(username.value.length == 0){ 
      errname.innerHTML="用户名不能为空"
      errname.className="error"
      return false; 
      } 
    if(!pattern.test(username.value)){ 
      errname.innerHTML="用户名不合规范"
      errname.className="error"
      return false; 
      } 
     else{ 
       errname.innerHTML="OK"
       errname.className="success"; 
       return true; 
       } 
    } 
    //验证密码   
  function checkPassword(){ 
    var userpasswd = document.getElementById('userPasword'); 
    var errPasswd = document.getElementById('passwordErr'); 
    var pattern = /^\w{4,8}$/; //密码要在4-8位 
    if(!pattern.test(userpasswd.value)){ 
      errPasswd.innerHTML="密码设置不符合要求"
      errPasswd.className="error"
      return false; 
      } 
     else{ 
       errPasswd.innerHTML="OK"
       errPasswd.className="success"; 
       return true; 
       } 
    } 
   //验证手机号 
    function checkPhone(){ 
    var userphone = document.getElementById('userPhone'); 
    var phonrErr = document.getElementById('phoneErr'); 
    var pattern = /^1[34578]\d{9}$/; //验证手机号正则表达式 
    if(!pattern.test(userphone.value)){ 
      phonrErr.innerHTML="手机号码不合规范"
      phonrErr.className="error"
      return false; 
      } 
     else{ 
       phonrErr.innerHTML="OK"
       phonrErr.className="success"; 
       return true; 
       } 
    } 


    // window.onload=function(){
    //     var send=document.getElementById('send'),
    //         times=60, 
    //         timer=null;
    //     send.onclick=function(){
    //         // 计时开始 
    //     timer=setInterval(function(){
    //         times--;
    //         if(times<=0){
    //                 send.value="发送验证码";
    //                 clearInterval(timer);
    //                 times=5;
    //                 send.disabled=false;
    //             }else{
    //                 send.value=times+"秒后重试"
    //                 send.disabled=true;
    //             }
    //     },1000)
    //     } 
    // }