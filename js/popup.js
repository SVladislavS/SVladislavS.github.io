var button = document.getElementById("bt");
button.addEventListener('click', function() {
    swal({
  imageUrl: 'https://image.flaticon.com/icons/svg/929/929416.svg',
  imageWidth: 400,
  imageHeight: 200,
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=#>Why do I have this issue?</a>"
})
});


