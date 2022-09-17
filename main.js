// https://www.youtube.com/watch?v=QS6Y0ezhyCs
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
        displayNumbers() {
            if(0 == 0) {
                console.log("hi");
                this.$refs.screen.textContent = "";
                this.num1 = 5;
                this.num2 = 6;
                this.symbol = "+";
                this.$refs.screen.innerHTML = `${this.num1} ${this.symbol} ${this.num2}`;
            }
        },

        sum() {
        let buttons = Array.from(document.querySelectorAll(".button"));

        buttons.map( button => {
            button.addEventListener("click", (e) => {
                console.log(e.target);
                console.log(e.target.innerText);
                this.$refs.screen.textContent = e.target.innerText;
            })
            })
        
        }
    }   
})

app.mount("#app");