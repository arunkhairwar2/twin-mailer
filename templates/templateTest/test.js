const dateTimeInput = document.getElementById("dateAndTimeInput");

dateTimeInput.addEventListener("change", function (e) {
  let inputValue = e.target.value;
  console.log(inputValue);
});
