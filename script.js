let string="";
let button=document.querySelectorAll('button')
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='<img src="backspace.svg" alt="X">'){
            // let str = string.slice(0,-1)
            
            str1 = string[string.length-1];
            console.log(str1);
            string=string.replace(str1,"")
            document.querySelector('input').value=string;
        }
        else{

            // console.log(e.target)
            string=string+ e.target.innerHTML; 
            document.querySelector('input').value=string;
        }
    }
    )
}
)