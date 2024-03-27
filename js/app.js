console.log('JS funziona');

const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoArray: [
          {
            text: 'Fare colazione',
            done: false
          },
          {
            text: 'Vestirsi',
            done: false
          },
          {
            text: 'Uscire di casa',
            done: false
          }
        ],
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
        console.log(this.toDoArray[i].done)
        
      },
    },
    
  }).mount('#app')








































