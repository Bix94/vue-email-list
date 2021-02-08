// Genera 10 mail tramite api e stampale in una lista.

var app = new Vue ({
  el: '#app',
  data: {
      // email singola
      email : '',
      // creo array in cui pushare lista email
      emailList :[]
  },
  methods: {
    // funzione
    getEmail(){
      // 10 email serve ciclo
      for(let i = 0; i < 10; i++){
        axios
        // link api
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        // comando return link
        .then(result => {
          // pusho risultato in array
          // ricordarsi response = risultato
            this.emailList.push(result.data.response)
        })
      }
    }
  }
});
