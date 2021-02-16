let add = document.getElementById('add');
let cross = document.getElementById('cross');
let sidebar = document.querySelector('.sidebar');

add.addEventListener('click', function(e){
    // if(sidebar.classList.contains('showSidebar')){
    //     sidebar.classList.remove('showSidebar');
    // }else{
    //     sidebar.classList.add('showSidebar');
    // }
    sidebar.classList.toggle('showSidebar');
});

cross.addEventListener('click', function(e){
    // if(sidebar.classList.contains('showSidebar')){
    //     sidebar.classList.remove('showSidebar');
    // }else{
    //     sidebar.classList.add('showSidebar');
    // }
    sidebar.classList.toggle('showSidebar')
});

