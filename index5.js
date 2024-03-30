let num1 = prompt("Birinchi sonni kiriting: ")
let num2 = prompt("Ikkinchi sonni kiriting: ")
if(num1<=num2){
    for (;num1 <= num2;num1++){
        if(num1 %2 ==0){
            console.log(num1);
        }
    }
} else{
    alert("Birinchi kiritgan soningiz ikkinchisidan kichkina bo'lishi kerak");
}
