// AZIONE: Inizializzo il js per applicare Vue js e Axios 
let app = new Vue({

    // AZIONE: Assegno l'id 
    el: '#container',

    // AZIONE: Inizializzo le variabili 
    data: {

        emailRandom: [],
        registrazione: ''

    },

    mounted() {

        // AZIONE: Eseguo un push di 10 email generali utilizzando axios 
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.emailRandom.push(result.data.response);
            });
        //FINE AZIONE: Eseguo un push di 10 email generali utilizzando axios 

        };
    },
    methods:{

        // AZIONE: Al click del pulsante la nuova email verra inserita nell'array e stampata sullo schermo tramite un v-for inserito nella lista 
        registra(){
            if(this.registrazione.length >= 8 && this.registrazione.includes('@') && this.registrazione.includes('.com') && !this.emailRandom.includes(this.registrazione) ){
                this.emailRandom.push(this.registrazione);
                this.registrazione = '';
            }
            else{
                alert('Email non valida (ATTENZIONE!! Min 8 caratteri. P.S Non dimenticare la @) questa email potrebbe già essere utilizzata');
            }
        }
        //FINE AZIONE: Al click del pulsante la nuova email verra inserita nell'array e stampata sullo schermo tramite un v-for inserito nella lista 

    }

});
//FINE AZIONE: Inizializzo il js per applicare Vue js e Axios 
