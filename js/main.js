document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__btn');

    menuItems.forEach(function(item) {

        item.addEventListener('click', function() {
            menuItems.forEach(function(menuItem) {

                menuItem.classList.remove('menu-active');
            });

            item.classList.add('menu-active');
        });
    });
});

function searchByName() {

    let searchValue = document.getElementById('search').value.toLowerCase();

    const custumers = document.querySelectorAll('.custumer');

    custumers.forEach(function(row) {
        const custumerName = row.querySelector('.custumer__name').textContent.toLowerCase();

        row.style.display = custumerName.includes(searchValue) ? 'table-row' : 'none';
    });
}

function handleKeyPress(event) {

    if (event.key === 'Enter') {
        
        searchByName();
    }
}

// обробник перемикача бургера
const toggleButton = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('menu-btn-active');
  sideBar.classList.toggle('sidebar-open');

  if (sideBar.classList.contains('sidebar-open')) {
    sideBar.style.display = 'flex';
  } else {
    sideBar.style.display = '';
  }
});

sideBar.addEventListener('click', function(event) {
  if (sideBar.contains(event.target)) {
    toggleButton.classList.toggle('menu-btn-active');
    sideBar.classList.toggle('sidebar-open');

    if (!sideBar.classList.contains('sidebar-open')) {
      sideBar.style.display = '';
    }
  }
});