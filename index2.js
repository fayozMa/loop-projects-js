let i=1
const numbers = []
for(i;i<=100;i+=2){
    numbers.push(i);
}
const outputElement = document.getElementById("numbers");
outputElement.textContent = `Collected Integers: ${numbers.join(", ")}`;  // Output the entire array as a comma-separated string
