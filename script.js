// JavaScript to toggle the 'active' class when a menu item is clicked
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    menuItems.forEach(menu => menu.classList.remove('active'));
    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});
