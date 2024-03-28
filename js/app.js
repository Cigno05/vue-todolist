console.log('JS funziona');

const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoArray: [],
        inputText:'',
        listDone: false
      }
    },
    methods: {

      addToDo() {
        if (this.inputValue !== '') {
          this.toDoArray.push(
            {
              text: this.inputText,
              done: false
            }
          )
          this.inputText = ''
        }
        

      },
      toDoDone(i) {
        this.toDoArray[i].done = true
        // console.log(this.toDoArray[i].done)
        
      },
      eraseToDo(i) {
        this.toDoArray.splice(i,1)
      }
    },
    
  }).mount('#app')








































