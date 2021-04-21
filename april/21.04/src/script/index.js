function insert(num){
    document.form.textView.value=document.form.textView.value+num
}
function rest(){
    if(document.form.textView.value > ""){
        document.form.textView.value=""
    }
}
function equal(){
   const exp= document.form.textView.value;
   if(exp){
    document.form.textView.value=eval(exp)
   }
}