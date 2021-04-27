var app = new Vue(
    {
        el: '#root',
        data: {
            arrayMail:[]
        },

        method: {

        },

        mounted(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=>{
                    //console.log(response);
                    
                    const result = response.data;
                    //console.log(result);
                    const mail = result.response;
                    //console.log(mail);

                    for(var i = 0; i < 10; i++){
                    
                        const mail = result.response;
                        console.log(mail);
                        console.log(i);
                    }
                

                });
        }
    }
)

