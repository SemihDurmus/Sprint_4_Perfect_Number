// In number theory, a perfect number is a positive integer
//that is equal to the sum of itspositive divisors,
//excluding the number itself. For instance,
//6 has divisors 1, 2 and 3, and 1 + 2 + 3 = 6,so 6 is a perfect number.

const input_area = document.querySelector("#nr_input");
const output_area = document.querySelector("#output");

document.querySelector("#btn").addEventListener("click", check_perfect);

function check_perfect() {
  if (input_area.value < 1) {
    alert("Enter a positive number ");
  } else {
    let nr = input_area.value;
    console.log(nr);
    let divisors = [];

    for (let i = 1; i < nr; i++) {
      if (nr % i === 0) divisors.push(i);
    }

    divisors.reduce((a, b) => a + b, 0) == nr
      ? (output_area.innerHTML = nr + " is a perfect number")
      : (output_area.innerHTML = nr + " is not a perfect number");

    input_area.value = "";
  }
}
