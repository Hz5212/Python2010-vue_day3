<template>
    <div id="app">
        <h1>学生信息管理系统</h1>
        <router-link to = "/back">首页留言板</router-link>
        <router-link to="/student">学生管理</router-link>
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
    comments: {}
}
</script>

<style>
</style>
