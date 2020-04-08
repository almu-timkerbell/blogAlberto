
var app = new Vue({
    el: '#app',
    data: {
      webName: "motobox",
    },
    methods: {
      hideShow(){
        const menu = document.querySelector('.nav_container');
        if (menu.classList.contains('is-active')){
          menu.classList.remove('is-active');
        }
        else{
          menu.classList.add('is-active');
        }

      }
    },


  })