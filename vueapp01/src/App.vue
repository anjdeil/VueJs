<template>
    <div class = "hello"> 
    <h1> {{msg}} </h1> 
    <hr/> 
    <div> 
      <ul> 
        <li v-for="user in users"> 
          {{user.firstname }} {{user.lastname}} 
        </li> 
      </ul> 
    </div> 
    <hr/> 
    <div> 
      <input type = "text" v-model = "input_val"> 
    </div> 
    <div> 
      Input Value: <span v-text="input_val"></span>
    </div> 
    <hr /> 
    <div> 
      <button class = "btn btn-primary" v-on:click = "counter += 1">Вы нажимали эту кнопку {{counter}} раз! </Button> 
    </div> 
  </div> 
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      input_val: '',
      counter: 0
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
    list-style-position: inside;
}
a {
  color: #42b983;
}
</style>
