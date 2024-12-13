

$('.form').on('submit', function(e){
    e.preventDefault()
 let regEx = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
     let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/

     const input2 = $('.input2').val()
     const input3 = $('.input3').val()
    const input4 = $('.input4').val()
    const input5 = $('.input5').val()


    
     let er = $('.er')
    let err = $('.err')
    let errr = $('.errr')
    let errr1 = $('.errr1')


    if(!input2){
        er.text('enter user name').css('color', 'red')
    }else{
        er.text('')
    
    }
    

        if(!input3){
            err.text('input email addres').css('color', 'red')
        }else if (!regEx.test(input3)){
            err.text('invalid email').css('color', 'red')
        }else{
            err.text('').css('color','green')
        }
    
    if (!input4){

        errr.text('password cant be empty').css('color','red')

    }else if (input4.lenght < 8) {

        errr.text('password can not be less than 8 character').css('color','red')
        
    }else if(!passRegex.test(input4)){

        errr.text('passwoed must contain letter').css('color','red')
    }else{
        errr.text('')
    }

    if(!input5){
        errr1.text('pleas confierm password').css('color','red')
    }else if(input5 != input4){
        errr1.text('password not match').css('color','red')
    }else{
        errr1.text('')
    }

})


    
    $('#btn').click(function(){
        let usernam = $('#usernam').val()
        localStorage.setItem('username', usernam)
    
    let username = localStorage.getItem('username')
    $('.h1').text(username)    
    })
    
    $('#btn').click(function(){
        let name = $('#name').val()
        localStorage.setItem('thename', name)
    
    let thename = localStorage.getItem('thename')
    $('.h1').text(thename)    
    })
    
    $('#btn').click(function(){
        let email = $('#email').val()
        localStorage.setItem('myemail', email)
    
    let myemail = localStorage.getItem('myemail')
    $('.h1').text(myemail)    
    })
    
    
    $('#btn').click(function(){
        let password = $('#password').val()
        localStorage.setItem('mpassword', password)
    
    let mpassword = localStorage.getItem('mpassword')
    $('.h1').text(mpassword) 
       
    })
    //  })

     $('.form').on('submit', function(e){
        e.preventDefault()
     let paRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
     let inpu = $('.inpu').val()
     let err4 = $('.err4')
     
    if (!inpu){

        err4.text('password cant be empty').css('color', 'red')


    }else if(!paRegex.test(inpu)){

        err4.text('')
    }else{
        err4.text('')
    }
    



   
    let aegEx = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let click = document.querySelector("#click");
    let email1 = $("#email1").val()
    const input3 = $('.input3').val()
     let errp = $('#errp')

     


     if(!email1){
        errp.text('input email addres').css('color', 'red')
    }else if (!aegEx.test(email1)){
        errp.text('invalid email').css('color', 'red')
    }else{
        errp.text('').css('color','green')
    }


      if( input3 && email1) {
   
      }else{
       
        click.addEventListener("click", () =>{
         window.location.href = "hello.html"
     })
      
      }


    let form = localStorage.getItem("form")
    let formData = form ? JSON.parse(form): []
    document.getElementById('btn').addEventListener('click', addNewform)
    function addNewform(){
        let data = new formData(usernam.name,thename.password,email)
        form.push(data)
        localStorage.setItem('data',JSON.stringify(formDataData))
    }
   

    })
