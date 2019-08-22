<template>
  <article class="container">
    <div class="row">
      <input type="text" class="col expression-display" :value="expression" disabled />
    </div>

    <div class="row">
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">7</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">8</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">9</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">+</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">-</button>
    </div>

    <div class="row">
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">4</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">5</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">6</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">*</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">/</button>
    </div>

    <div class="row">
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">1</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">2</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">3</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">(</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">)</button>
    </div>

    <div class="row">
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">0</button>
        <button class="col-xs-3 btn btn-primary" @click="addCharacterToExpression">.</button>
        <button class="col-xs-3 btn btn-primary" @click="equals">=</button>
        <button class="col-xs-3 btn btn-primary" @click="clearExpression">CE</button>
        <button class="col-xs-3 btn btn-primary" @click="backspace">BK</button>
    </div>

  </article>
</template>

<script>
import { evaluate } from "mathjs"

export default {
    name: "Calculator",

    data() {
      return {
        expression: ""
      }
    },

    methods: {

        // Adds a character to the expression box
        addCharacterToExpression: function(event) {
            let inputString = (event.originalTarget.innerText).trim();
            this.expression = this.expression.concat(inputString);            
        },

        // Clears the expression box
        clearExpression: function(event) {
            this.expression = "";
        },

        // Remove the last character from the expression box
        backspace: function() {
            this.expression = this.expression.slice(0, -1);
        },

        // Compute the expression.  Uses math.js
        equals: function() {
            if ( this.expression.trim() === "" ) return;
            this.expression = evaluate(this.expression).toString();
        }
    }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');

.container {
  width: 13rem;
}

.expression-display {
  font-family: 'Orbitron', sans-serif;
}

.btn {
  margin: 0.25rem;
  width: 2rem;
  height: 2rem;
}
</style>