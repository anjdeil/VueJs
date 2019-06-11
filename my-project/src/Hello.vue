 
 <template>
 <div v-bind:class="bgYellow">
    {{heading}}
  </div>
 
 </template>
 <script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      heading: 'Hello World',
      bgYellow: 'bgYellow'
    }
  }
}
 </script>
 
 <style>
.bgYellow{
  background-color: yellow;
}
 
 </style>