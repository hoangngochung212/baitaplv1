function showModalLogin(){
    var btn = document.querySelector('.show-login');

    btn.addEventListener('click',()=>{
        var modalElement = document.querySelector('.modal');
        modalElement.style.display = 'flex';
    })

}
showModalLogin();

function closeModal(){
    var modalElement = document.querySelector('.modal');
    modalElement.style.display ='none';
}

var infoUser = {
    user : 'admin',
    password: 'admin'
}
var error = document.querySelector('.message-eror');
function handleLogin(){
    var btnLogin = document.querySelector('#login');
    
    btnLogin.addEventListener('click', (e)=> {
        e.preventDefault();
        var inputName = document.getElementById('name').value;
        var inputPass = document.getElementById('pass').value;
        
        if(inputName === '' || inputPass ==='' ){
            error.innerHTML = "Vui lòng nhập tên và mật khẩu !"
        }
        if(inputName === infoUser.user && inputPass === infoUser.password){
                error.innerHTML =''
                document.querySelector('.loader').style.display = 'block';
                btnLogin.style.display ='flex';
                document.querySelector('.login span').innerHTML = 'Loading ...';
            setTimeout(function(){
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.show-login').innerHTML = 'Đăng nhập thành công';
        },1000)
        }else {
            error.innerHTML = "Tên đăng nhập hoặc mật khẩu không chính xác !";
        }
        
    })
}
handleLogin();

function fogetPassword(){
    var forgot = document.querySelector('.forget-pass');
    forgot.addEventListener('click',()=>{
        var inputName = document.getElementById('name');
        var inputPass = document.getElementById('pass');
        
        inputName.placeholder = 'OldPassWord';
        inputName.type = 'password';
        inputPass.placeholder ='NewPassWord';
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.save').style.display ='block';
        error.innerHTML = '';
        var save = document.querySelector('.save');
        save.addEventListener('click',(e)=>{
            e.preventDefault();
            if(inputName.value === '' || inputPass.value ==='' ){
                error.innerHTML = "Vui nhập đầy đủ thông tin !"
            }else{
                // return inputName.value ===infoUser.password ? infoUser.password = infoUser.password : error.innerHTML = 'Vui khẩu nhập chưa đúng !';
                if(inputName.value===infoUser.password){
                    infoUser.password = inputPass.value;
                    inputName.placeholder = 'User name';
                    inputName.type = 'text';
                    inputPass.placeholder ='Password';
                    document.querySelector('.login').style.display = 'block';
                    document.querySelector('.save').style.display ='none';
                    
                }else {
                    error.innerHTML = 'Mật khẩu nhập chưa đúng !'
                }
            }
        })
    })
}
fogetPassword();