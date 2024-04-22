// Side bar toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleSidebarButton = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  toggleSidebarButton.addEventListener('click', function() {
    sidebar.classList.toggle('open');
  });
});




