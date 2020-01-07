import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    let vue_vm = new Vue({
        data: {
            message: 'Hello from Vue!',
            collection: [
                {name: 'Trevor', role: 'Prof'},
                {name: 'Pan', role: 'Prof'},
                {name: 'Joe', role: 'Prof'},
                {name: 'Justin', role: 'Coordinator'}
            ]
        },

        methods: {
            logClicked() {
                console.log('Clicked on an element!');
            }
        }
    }).$mount("#app");
})();