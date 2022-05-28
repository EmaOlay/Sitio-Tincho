
let app = Vue.createApp({

    data: function(){
        return{
            lineas : 39,
            ticks: 5,
            add_width:5,
        }
    },
    methods: {
        //Crea regla
        
        cambia_estilo_regla(){
            for (let i = 1; i < this.lineas+1; i++) {
                var el = document.getElementById(i);
                //console.log(el.style)
                el.style.setProperty("width", 5+"px");
                /*Triangulo*/
                if (i%this.ticks==0) {
                    if (i<(this.lineas+1)/2) {
                        el.style.setProperty("width", 5+this.add_width+"px");
                        this.add_width*=2;
                    } else {
                        el.style.setProperty("width", 5+this.add_width+"px");
                        this.add_width/=2;
                        }
                }                
            }
        }
    },
    created(){
        
        //this.cambia_estilo_regla();
    },
    mounted(){
        this.cambia_estilo_regla();
    }
    }
)
app.mount('#app1')