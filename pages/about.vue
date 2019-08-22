<template>
    <section>
        <article class="text-center">
        <h1>About This Site</h1>
            <p>This site is a Nuxt.js learning project.</p>
        </article>
    </section>
</template>

<script>
export default {
    name: "AboutPage",
    head: {
      title: 'About',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'About This Website' },
        { hid: 'keywords', name: 'keywords', content: 'nuxt, learning, application, vue, javascript' }
      ]
    }
}
</script>