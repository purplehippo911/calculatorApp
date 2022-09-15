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
        this.document.body.classList.add("dark")
    }
    if(this.i == 4 )  {
        console.log("its at column 3")
        this.$refs.slider.style.gridColumnStart = "3";
    }
    if(this.i > 5 )  {
        console.log("its back to column 1")
        this.$refs.slider.style.gridColumnStart = "1";
        this.i = 0;
    }

    }
}
    
})

app.mount('#app')