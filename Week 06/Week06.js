var app = new Vue({
    el: '#app',
    data() {
        return{
            password: 'Password',
            email: 'email',
            checked:['check01'],
            choices: [
            {text: '1', id:'one'},
            {text: '2', id:'two'},
            {text: '3', id:'three'}
            ],
            choosen: 'one'
        }
    }
});