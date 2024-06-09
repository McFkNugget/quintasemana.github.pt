document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const header = document.querySelector('.fixed-header');
    const footer = document.querySelector('footer');
    
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            content1.classList.remove('visible');
            content2.classList.add('visible');
            header.style.backgroundColor = '#fff'; // New background color
            header.style.color = 'black'; // New text color
            footer.style.backgroundColor = '#000'
            footer.style.color = 'white'; // New text color for footer
        } else {
            content1.classList.add('visible');
            content2.classList.remove('visible');
            header.style.backgroundColor = '#000'; // Original background color
            header.style.color = 'white'; // Original text color
            footer.style.backgroundColor = '#FFF'
            footer.style.color = 'black'; // New text color for footer
        }
    });
});