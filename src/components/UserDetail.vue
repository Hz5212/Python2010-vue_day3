<template>
  <div>
        <h3>用户详情页</h3>
        需求：在用户详情页展示该用户的详细信息---> {{ $route.params.id}}
        <!--    遍历查询用户的详细信息  展示出来    -->
        <span v-for="(value, key) in JSON.parse($route.params.id)" :key="key">
            {{ key }}: {{ value }}<br>
        </span>
        <button><router-link to="/back">返回首页</router-link></button>
      <button><router-link to="/student">返回用户列表页</router-link></button>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
            data() {
            return {
                user_list: [
                    {id: 1, username: "小黑", bir: "2022-12-12", content: "自我介绍"},
                    {id: 2, username: "小包", bir: "2032-12-12", content: "自我介绍"},
                    {id: 3, username: "小子", bir: "2042-12-12", content: "自我介绍"},
                    {id: 4, username: "小率", bir: "252-12-12", content: "自我介绍"},
                ]
            }
        },
}
</script>

<style scoped>

</style>
