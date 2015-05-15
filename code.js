function subfun(a,b){
	op = b
	if(op==1||op==2||op==3){
		loadregister(a)
	}
	else if(op==5 || op==6 || op==7){
		operation(a,b)
	}	
}

function loadregister(val){
	console.log("Register inputed");
	var rval = val%10000;
	var regnum = ~~(rval/1000);
	var rvalu = val%1000;
	reg[regnum]=rvalu;
}

function operation(obj,op){
	console.log("Operations:")
	var regtemp = obj%10000
	var reg1 = ~~(regtemp/1000)
	var reg2 =obj%10
	if(op==5){
		reg[reg1]=reg[reg1]+reg[reg2]	
	}else if(op==6){
		reg[reg1]=reg[reg1]-reg[reg2]	
	}else if(op==7){
		reg[reg1]=~~(reg[reg1]/reg[reg2])	
	}else if(op==8){
		reg[reg1]=reg[reg1]*reg[reg2]	
	}
}

function display(ival,dval){
	console.log("10"+String(ival)+":"+String(dval))
	var t;	
	for(var i= 1;i<reg.length;i++){
		t=(30+i)*1000+reg[i]
		console.log("Register"+String(i)+" value:"+String(t))
	}
}

function main(){
	reg = []
	var k=[]
	k.push(31012)
	k.push(32022)
	k.push(51002)
	k.push(33032)
	k.push(51003)
	console.log("\n\n##SIMULATOR##\nMachine Codes")
	for(var i in k){
		console.log(k[i])
	}
	for(var j = 0;j<k.length;j++){
		val=~~(k[j]/10000)
		subfun(k[j],val)
		display(j,k[j])
	}
}
main()
/*
000000       Halt
01rmmm       Load register r with contents of address mmm.
02rmmm       Store the contents of register r at address mmm.
03rnnn       Load register r with the number nnn.
04r00s       Load register r with the memory word addressed by register s.
05r00s       Add contents of register s to register r
06r00s       Sub contents of register s from register r
07r00s       Mul contents of register r by register s
08r00s       Div contents of register r by register s
100mmm       Jump to location mmm
11rmmm       Jump to location mmm if register r is zero
*/
