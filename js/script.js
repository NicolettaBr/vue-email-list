var app = new Vue(
    {
        el: '#root',
        data: {
            arrayMail: []
        
        },

        method: {

        },

        mounted(){
            for(let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    //console.log(response);
                    
                    const result = response.data;
                    //console.log(result);

                    const mail = result.response;
                    console.log(mail);

                    this.arrayMail.push(mail);
                    
                });
            }
            
        }
    }
)

