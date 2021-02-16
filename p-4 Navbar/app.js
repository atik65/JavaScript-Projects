let btn = document.getElementsByClassName('btn')[0];
let links = document.getElementsByClassName('links')[0];

btn.addEventListener('click', function(e){
  
    // if(links.classList.contains('links-show')){
    //     links.classList.remove('links-show');

    // }else{
    //     links.classList.add('links-show');
    // }
    links.classList.toggle('links-show')
})


