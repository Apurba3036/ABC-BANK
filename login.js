// console.log('i am apurba');

document.getElementById('btn-submit').addEventListener('click',function(){

   const emailfield =document.getElementById('email');
   const email=emailfield.value;
//    console.log(email);

const password = document.getElementById('exampleInputPassword1');
const pass=password.value;
// console.log(pass);



if(email === 'Apurba'  && pass=== 'apurba123'){

   window.location.href= 'main.html';
}

else if(email=== 'Shanto' && pass=== 'shanto123'){
       
   window.location.href= 'shanto.html';
}
else if(email=== 'Shajnin' && pass=== 'shajnin123'){
       
   window.location.href= 'shajnin.html';
}
else if(email=== 'Tithi' && pass=== 'tithi123'){
       
   window.location.href= 'tithi.html';
}
else if(email=== 'Nazifa' && pass=== 'nazifa123'){
       
   window.location.href= 'nazifa.html';
}
else if(email=== 'Ayesha' && pass=== 'ayesha123'){
       
   window.location.href= 'ayesha.html';
}
else if(email=== 'Fahima' && pass=== 'fahima231'){
       
   window.location.href= 'fahima.html';
}

else{
   alert('Please give correct user-name and password')
}

})







