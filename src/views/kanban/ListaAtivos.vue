<template>
  <div class="container">
    <em class="title">Tarefas Concluídas</em>
    <div class="active-task-list">
      <ul class="task-list">
        <li v-for="(task, index) in listaConcluido" :key="index" class="task-item">
          {{ task }}
          <b-button-group class="task-actions">
            <b-button variant="warning" @click="desmarcarTask(index)" size="sm">Desmarcar</b-button>
            <b-button variant="danger" @click="deleteTask(index)" size="sm">Remover</b-button>
          </b-button-group>
        </li>
      </ul>
    </div>
  </div>
</template>
   
<script>
import store from '@/store';
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    listaConcluido() {
      return store.getters.listaConcluidos;
    },
    ...mapState(['completedList'])
  },
  methods:{
    ...mapActions(['desmarcarTask']),
    
    deleteTask(index) {
      this.$store.commit('removeTodo', {index, context: "completedList"})
    },
    desmarcarTask(index){
      this.$store.commit('desmarcarTask', index);
      this.$router.push('/', index);
    }
   
  }
}
</script>

<style>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh; 
  background-color: #ffe1aa;
}

.title {
  color: #FF4500;
  font-size: 40px;
  margin-bottom: 10px;
}

.task-list {
  list-style-type: none;
  padding: 10px;
}
</style>
