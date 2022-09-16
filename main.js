const app = Vue.createApp({
    data() {
        return {
         i: 0,
         theme: ["dark", "light", "neon"],
         num1: 0,
         num2: 0,
         symbol: null,
         inUse: false,
        }
    },    
    
    methods: {
    
        toggleOpen() {
            this.i++;
        if(this.i == 2 )  {
            document.body.classList.remove(`${this.theme[0]}`);
            this.$refs.slider.style.gridColumnStart = "2";
            document.body.classList.add(`${this.theme[1]}`);
        }
        if(this.i == 4 )  {
            document.body.classList.remove(`${this.theme[1]}`);
            this.$refs.slider.style.gridColumnStart = "3";
            document.body.classList.add(`${this.theme[2]}`);
            
        }
        if(this.i > 5 )  {
            this.i = 0;
            document.body.classList.remove(`${this.theme[2]}`);
            this.$refs.slider.style.gridColumnStart = "1";
            document.body.classList.add(`${this.theme[0]}`);
    
        }
    },
    displayNumber() {
        if(inUse) {
            this.$refs.screen.textContent = "";
            return `${num1} ${symbol} ${num2}`;
        }
    }
    
    }
        
    })
    
    app.mount('#app')