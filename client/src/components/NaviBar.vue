<template>
   <body>
    <div id="navigation">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a href="#" class="navbar-brand">OnFire</a>
            <button class="navbar-toggler" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="navbar-item"><router-link to="/menu" class="nav-link">Menu</router-link></li>
                <li class="navbar-item"><router-link to="#" class="nav-link">About us </router-link></li>

            </ul>
            </div>
        </nav>
    </div>
   </body>
</template>
<script>
export default {}
</script>

<style>
.navigation{
    bottom: 0;
    transition: all 300ms ease-in-out;
}
</style>
