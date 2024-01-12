var b=document.getElementsByClassName("a");
var d=document.getElementById("dis");
var dd=document.getElementById("disp");
var count=0;
var previous=0;
var op1=0;
var op=null;
var op2=null;
var arr=new Array(b.length);
for(var i=0;i<b.length;++i){
      b[i].addEventListener('click',function(){
      var i=0;
      var value=this.getAttribute('data-value');
      if(value=='+/-'){
        if(count%2==0){
            value='+';
            op1=parseFloat(d.textContent);
            op=value;
            d.innerText =value;
            count++;
            
        }
        else{
            value='-';
            op1=parseFloat(d.textContent);
            op=value;
            d.innerText =value;
            previous =dd.textContent;
            count++;
        }
      }
      else if(value=='ac'){
        d.innerText="";
        dd.innerText="";
        previous +=dd.textContent;
      }
      else if(value=='+'||value=='-'||value=='*'||value=='%'||value=='/'){
      
            op1=parseFloat(d.textContent);
            arr[i]=value;
            op=value;
            d.innerText =value;

      }
      else if(value=='='){
  
            arr[i]=value;
            op2=parseFloat(d.textContent);
            var result= eval(op1+' '+op+' '+op2);
            d.innerText=result;
            //dd.innerText +='='+result;
            dd.innerText =result;
      }
      else{

        if(d.textContent=='+'||d.textContent=='-'||d.textContent=='*'||d.textContent=='/'||d.textContent=='%'){
            d.innerText="";
        }
            d.innerText +=value;
        }
      if(value!='='&&value!='ac'){
            previous +=dd.textContent;
            dd.innerText +=value;
      }
      });
}