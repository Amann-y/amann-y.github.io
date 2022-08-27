jQuery('#frm').validate({
    rules:{
email:{
    required:true,
    email:true
},
message:{
required:true,    
maxlength:250
},
    },messages:{
email:{
    required:"Please enter email",
    email:"Please enter valid email"
},
message:{
    required:"Please enter message",
    maxlength:"Message shouldn't be more than 250 words"
},
    },
    submitHandler:function(form){
        form.submit();
        $("#frm").trigger("reset");
     
    }
})


// let btnClear = document.getElementById("mysubmit");
// let inputemail = document.getElementById("myemail");
// let inputmessage = document.getElementById("mymessage");
// console.log(inputemail,inputmessage)

