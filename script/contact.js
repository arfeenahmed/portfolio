const form = document.getElementById("contactForm");


form.addEventListener("submit", async (e)=>{


e.preventDefault();


const btn = form.querySelector("button");


btn.disabled = true;

btn.innerHTML =
`<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;



const formData = new FormData(form);



try{


const response = await fetch(
"https://formspree.io/f/mnjkrbad",
{

method:"POST",

body:formData,

headers:{
Accept:"application/json"
}

});



if(response.ok){


form.reset();


Swal.fire({

icon:"success",

title:"Message Sent!",


text:"Thanks for contacting me. I will reply soon.",
iconColor:"var(--green)",
confirmButtonColor:"var(--green)",

background:"#323946",

color:"#fff"

});



}else{


throw new Error();

}



}

catch(error){


Swal.fire({

icon:"error",

title:"Failed!",

text:"Something went wrong. Please try again.",

confirmButtonColor:"#ff4d4d",

background:"#323946",

color:"#fff"


});


}


finally{


btn.disabled=false;


btn.innerHTML=
`<i class="fa-solid fa-paper-plane"></i> Send Message`;



}


});