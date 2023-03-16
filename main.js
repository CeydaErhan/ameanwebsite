const menuShow = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu ul');
    const links = document.querySelectorAll('.menu ul li');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active');

        links.forEach((link, index) => {
            if(link.style.animaation){
            link.style.animation = '';
        }else{
             link.style.animation = 'lis 0.5 ease forwards $(index/5 + 0.2s)s';
        }

        })


    });

}
menuShow();