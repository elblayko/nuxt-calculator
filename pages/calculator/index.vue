<template>
    <section class="text-center">
        <header>
            <h1>Mini Calculator</h1>
        </header>
        <Calculator />
        <footer class="small">
            "A calculator always helps..."
        </footer>
    </section>
</template>

<script>
import Calculator from "@/components/Calculator"

export default {
    name: "CalculatorPage",

    components: {
        Calculator
    },

    head: {
      title: 'Calculator',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Calculator Application' },
        { hid: 'keywords', name: 'keywords', content: 'calculator, nuxt, learning, application, vue, javascript' }
      ]
    }
}
</script>

<style scoped>
    footer {
        margin-top: 0.5rem;
    }
</style>