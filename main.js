// https://www.youtube.com/watch?v=QS6Y0ezhyCs
const app = Vue.createApp({
    data() {
        return {
         i: 0,
         theme: ["dark", "light", "neon"],
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
        displayNumbers(e) {
            this.$refs.screenText.innerText = " ";
            this.$refs.screen.innerText += e.target.value;
        },
        sum() {
            this.$refs.screenText.innerText = " ";
            try {
                this.$refs.screen.innerText = eval(this.$refs.screen.innerText);
            } catch {
                this.$refs.screen.innerText = 'Error';
            }
        },
        del() {
            this.$refs.screenText.innerText = " ";
            if(this.$refs.screen.innerText) {
                this.$refs.screen.innerText = this.$refs.screen.innerText.slice(0, -1);
            } 
        },
        
        reset(){
            this.$refs.screenText.innerText = " ";
            if(this.$refs.screen.innerText) {
                this.$refs.screen.innerText = "";
            }
        }
    }

})

app.mount("#app");