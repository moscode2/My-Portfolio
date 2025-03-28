
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    // Debugging statement to check if the script is loaded
    console.log('JavaScript loaded');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Debugging statement to check if the click event is fired

        // Toggle active class
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');

        // Debugging to check class changes
        console.log('Hamburger classes:', hamburger.classList);
        console.log('Navigation classes:', navigation.classList);
    });
});
