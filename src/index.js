var calc_button=document.getElementById('calc_button');
var calc_text=document.getElementById('calc_text');
var type=0;

async function calc(){
	calc_text.value=await eel.calculate(calc_text.value)();
}

calc_button.addEventListener('click', calc);

setInterval(function(){
	if(type==0)document.title="H";
	else if(type==1)document.title="He";
	else if(type==2)document.title="Hel";
	else if(type==3)document.title="Hell";
	else if(type==4)document.title="Hello";
	else if(type==5)document.title="Hello ";
	else if(type==6)document.title="Hello W";
	else if(type==7)document.title="Hello Wo";
	else if(type==8)document.title="Hello Wor";
	else if(type==9)document.title="Hello Worl";
	else if(type==10)document.title="Hello World";
	else if(type==11)document.title="Hello World!";
	else if(type==12)document.title="Hello World!";
	else if(type==13)document.title="Hello World";
	else if(type==14)document.title="Hello Worl";
	else if(type==15)document.title="Hello Wor";
	else if(type==16)document.title="Hello Wo";
	else if(type==17)document.title="Hello W";
	else if(type==18)document.title="Hello ";
	else if(type==19)document.title="Hello";
	else if(type==20)document.title="Hell";
	else if(type==21)document.title="Hel";
	else if(type==22)document.title="He";
	else if(type==23)document.title="H";
	if(type==0)document.title="H";
	if(type==23)type=0;
	else type+=1;
}, 100);