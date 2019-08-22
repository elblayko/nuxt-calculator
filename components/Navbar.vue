<template>
    <nav>
        <ul class="navigation-bar">
            <li class="nav-item">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
                 <nuxt-link to="/calculator">Calculator</nuxt-link>
            </li>
            <li class="nav-item">
                 <nuxt-link to="/about">About</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .navigation-bar {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
    }

    .navigation-bar .nav-item {
        margin: 1rem 2rem;
        list-style: none;
    }

    .nav-item a {
        text-decoration: none;
        color: #000000;
    }
</style>