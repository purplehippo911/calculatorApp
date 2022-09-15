const app = Vue.createApp({
data() {
    return {
     message: 'Whats up',
     i: 0
    }
},    

methods: {

    toggleOpen() {
        this.i++;
    if(this.i == 2 )  {
        console.log("its at column 2")
        this.$refs.slider.style.gridColumnStart = "2";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
    if(this.i == 4 )  {
        console.log("its at column 3");
        this.$refs.slider.style.gridColumnStart = "3";
        document.body.classList.remove("light");
        document.body.classList.add("neon");
    }
    if(this.i > 5 )  {
        this.i = 0;
        console.log("its back to column 1");
        this.$refs.slider.style.gridColumnStart = "1";
        document.body.classList.remove("neon");
        document.body.classList.add("dark");

    }

    }
}
    
})

app.mount('#app')