function solve() {
   let number = Number(document.getElementById('num').value);
   let result = [1];

   for (let i = 2; i <= number; i++) {
      if (number % i === 0) {
         result.push(i);
      }
   }

   document.getElementById('result').textContent = result.join(' ');
}