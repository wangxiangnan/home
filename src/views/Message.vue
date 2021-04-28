<template>
  <div class="Message">
    Message
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Message',
  setup() {
    var ws = new WebSocket("ws://127.0.0.1:8000");

    ws.onopen = function(evt) { 
      console.log("Connection open ..."); 
      ws.send("Hello WebSockets!");
    };

    ws.onmessage = function(evt) {
      console.log( "Received Message: " + evt.data);
      ws.close();
    };

    ws.onclose = function(evt) {
      console.log("Connection closed.");
    };  
    return {}
  }
}
</script>
