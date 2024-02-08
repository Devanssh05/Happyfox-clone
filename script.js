var acc = document.getElementsByClassName("button1");
var accright=document.getElementsByClassName("buttonnavigation");
var i;
var num=[0,0,0,0,0,0];

var button1=document.getElementsByClassName("buttonleft")[0];
var button2=document.getElementsByClassName("buttonright")[0];

var monthly=document.getElementsByClassName("b1");
var annual=document.getElementsByClassName("b2");
var twoyear=document.getElementsByClassName("b3");
var threeyear=document.getElementsByClassName("b4");



for(i=0;i<accright.length;i++)
{
  console.log( accright[i])
  

  acc[i].addEventListener("click",function(){

     
 

  if (this.getElementsByClassName("buttonnavigation")[0].style.transform === "rotate(180deg)"){
    console.log("hello world")
    this.getElementsByClassName("buttonnavigation")[0].style.transform="rotate(0deg)"
  }
  else{
    this.getElementsByClassName("buttonnavigation")[0].style.transform = "rotate(180deg)";
  }

  

  });
}


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var plan= document.getElementsByClassName("b1")
var info=document.getElementsByClassName("pricing")
var saving=document.getElementsByClassName("saving")





console.log(info);


const prices = {
  monthly: {
      mighty: 39,
      fantastic: 59,
      enterprise: 79,
      enterpriseplus: 99
  },
  annual: {
      mighty: 29,
      fantastic: 49,
      enterprise: 69,
      enterpriseplus: 89
  },
  twoyear: {
      mighty: 26,
      fantastic: 39,
      enterprise: 52,
      enterpriseplus: 64
  },
  threeyear: {
      mighty: 27,
      fantastic: 41,
      enterprise: 55,
      enterpriseplus: 69
  }
};
const savings = {

  monthly:{
    mighty: " ",
    fantastic:" ",
    enterprise:" ",
    enterpriseplus:" "
  },
  annual: {
      mighty: "25% Savings<sup>*</sup>",
      fantastic: "16% Savings<sup>*</sup>",
      enterprise: "12% Savings<sup>*</sup>",
      enterpriseplus: "10% Savings<sup>*</sup>"
  },
  twoyear: {
      mighty: "33% Savings<sup>*</sup>",
      fantastic: "34% Savings<sup>*</sup>",
      enterprise: "34% Savings<sup>*</sup>",
      enterpriseplus: "35% Savings<sup>*</sup>"
  },
  threeyear: {
      mighty: "30% Savings<sup>*</sup>",
      fantastic: "30% Savings<sup>*</sup>",
      enterprise: "30% Savings<sup>*</sup>",
      enterpriseplus: "30% Savings<sup>*</sup>" 
  }
};

const pricesright = {
  
  annual: {
      starter: "1,499",
      growth: "1,999",
      scale: "2,999",
      scaleplus: "4,999"
  },
  twoyear: {
      starter: "1,149",
      growth: "1,599",
      scale: "2,399",
      scaleplus: "3,999"
  },
  threeyear: {
      starter: "1,299",
      growth: "1,729",
      scale: "2,609",
      scaleplus: "4,329"
  }
};
const savingsright = {
  
  annual:{ 
    starter: "",
    growth:"",
    scale:"",
    scaleplus:""
    },
  twoyear: {
      starter: "23% Savings<sup>*</sup>",
      growth: "20% Savings<sup>*</sup>",
      scale: "20% Savings<sup>*</sup>",
      scaleplus: "20% Savings<sup>*</sup>"
  },
  threeyear: {
      starter: "13% Savings<sup>*</sup>" ,
      growth: "13% Savings<sup>*</sup>",
      scale: "13% Savings<sup>*</sup>",
      scaleplus: "13% sSavings<sup>*</sup>"
  }
};

function func(name) {
  
  var i;

  var temp=["mighty","fantastic","enterprise","enterpriseplus"];

  for(i=0;i<4;i++)
  {
    info[i].innerText=prices[name][temp[i]];
    saving[i].innerHTML=savings[name][temp[i]];
  }
}

function changebutton(select){

  var buttons=document.querySelectorAll('.buttons button');

  for(var i=0;i<buttons.length;i++)
  {
    buttons[i].className= 'b2';

  }

  select.className='b1';
}

function changebuttonright(select){

  var buttons=document.querySelectorAll('.buttonclassunlimited button');

  for(var i=0;i<buttons.length;i++)
  {
    buttons[i].className= 'b2';

  }

  select.className='b1';
}

// document.getElementsByClassName("buttonclass")[0].getElementsByTagName
// document.getElementsByClassName("buttonclass")[0].querySelector('button').addEventListener('click',(e)=>{
//   console.log(document.getElementsByClassName("buttonclass")[0].querySelector('button'))
//   document.getElementsByClassName("buttonclass")[0].querySelector('button').removeClass('selected');
//   document.getElementsByClassName("buttonclass")[0].querySelector(this).addClass('selected')
// })



function funct(name){

  var i;

  var temp=["starter","growth","scale","scaleplus"];

  for(i=4;i<8;i++)
  {
    info[i].innerText=pricesright[name][temp[i-4]];
    saving[i].innerHTML=savingsright[name][temp[i-4]];
  }
  
}

function element(buttons99,buttonright99,inforight,infor,buttoncolour,pricing,pricingright,pricingtable,pricingtableright){

  
  console.log("text")
  var button=document.getElementsByClassName(buttons99);
  var notvisible=document.getElementsByClassName(buttonright99)
  button[0].style.display="flex";
  console.log(button[1])
  notvisible[0].style.display="none";
  console.log(notvisible[1]);

  if(buttoncolour==="white")
  {
  button1.style.backgroundColor= "white";
  button2.style.backgroundColor="#ffeada"
  }
  else{
    button1.style.backgroundColor= "#ffeada";
  button2.style.backgroundColor="white";
  }

  var buttondisplay=document.getElementById(inforight);
  var buttonsdisplay=document.getElementById(infor);

  buttondisplay.style.display="flex";
  buttonsdisplay.style.display="none";

  var price=document.getElementsByClassName(pricing);
  var priceright=document.getElementsByClassName(pricingright);
  var pricetable=document.getElementsByClassName(pricingtable);
  var pricetableright=document.getElementsByClassName(pricingtableright);

  price[0].style.display="flex";
  priceright[0].style.display="none";
  pricetable[0].style.display="flex";
  pricetableright[0].style.display="none";



  
}