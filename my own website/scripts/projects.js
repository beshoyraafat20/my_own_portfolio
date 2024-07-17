document.addEventListener('DOMContentLoaded', function() {
    // Get all "Learn More" buttons and their corresponding details
    const learnMoreButtons = document.querySelectorAll('.learn-more-button');
    const detailsElements = document.querySelectorAll('.details');

    // Add a click event listener to each button
    learnMoreButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const details = detailsElements[index];
            toggleDetails(details);
        });
    });

    // Function to toggle the visibility of project details
    function toggleDetails(details) {
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    }
});
