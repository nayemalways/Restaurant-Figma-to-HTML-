// Select your header element
const header = document.querySelector('header');

// Function to handle scroll event
function handleScroll() {
    // Check scroll position
    if (window.scrollY > 100) { // Adjust 100 to the desired scroll position where you want to change the header color
        // Change background color of header
        header.style.backgroundColor = '#fff'; // Replace with your desired color code
        header.style.boxShadow = '3px 3px 10px #ddd;'; // Replace with your desired color code
    } else {
        // Revert back to original background color when scrolled back to top
        header.style.backgroundColor = 'transparent'; // Replace with your original header background color
    }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

 
 
 
 //   SEARCH INPUT AREA START
 const searcIcon = document.querySelector('.search__bar')
 const searinput = document.querySelector('.search__field')
 
 searcIcon.addEventListener('click', function(){
    searinput.style.display = "block";
    searcIcon.style.top = "2px";
 })
 // SEARCH INPUT AREA END