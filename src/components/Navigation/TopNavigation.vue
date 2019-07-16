<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h2>NewYork Times News</h2>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarItems">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarItems" class="navbar-menu">

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-light">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: "TopNavigation"
    }
</script>

<style scoped>

</style>