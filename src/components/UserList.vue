
  

<template>
<div>
<h1>Список пользователей</h1>
<div class = "user-list">

    <ul>
        <li v-for = "user in users" :key="user.id" >
        <h2>{{user.name}}</h2>
        <p>{{user.email}}</p>
        <p>{{user.role}}</p>
        <el-button @click = "selectUser(user.id)"> Посмотреть профиль</el-button>
        </li>
    </ul>
    <ChosenUser :user="selectedUser" v-if = "selectedUser"/>
</div> 
</div>

</template>
<script  lang="ts">
//import { type User} from '@/models/user.model';
import { USERS } from '@/fakeDB/users';
import ChosenUser from '@/components/ChosenUser.vue'

export default{
    data(){
        return{
        users:USERS,
        selectedUserId:null as string|null,
       
        }
    },
    components:{
        ChosenUser,
    },
    computed:{
        selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId)
    },
    },
    methods:{
        selectUser(userId: string) {
      this.selectedUserId = userId as string
      this.$router.push(`/users/${userId}`)
    },

    }
}
</script>
