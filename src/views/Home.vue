<template>
  <div class="container">
    <em class="title">Todo-List Hot </em>

    <div>
      <b-input-group>
        <b-form-input type="text" @keypress="(event) => addTask(event)" placeholder="Adicionar Tarefa"
          v-model="inputTask"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-warning" @click="addTask()" type="button">Adicionar</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <div>
      <b-input-group>
        <b-form-input type="text" placeholder="Pesquisar" v-model="pesquisarInput"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-warning" @click="pesquisar()">Pesquisar</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
 
  <div>
    
    <div class='task-list-container'>
    <ul v-if="!pesquisando" class="task-list">
      <li v-for="(task, index) in todoList" :key="index" class="task-item">
        {{ task }}
        <b-button-group class="task-actions">
          <b-button variant="warning" @click="completeTask(index)" size="sm">Concluir</b-button>
          <b-button variant="danger" @click="deleteTask(index)" size="sm">Remover</b-button>
        </b-button-group>
      </li>
    </ul>

   
    <ul v-else class="task-list" >
      <li v-for="(task, index) in listaPesquisada" :key="index" class="task-item">
        {{ task }}
        <button @click="completeTask(index)" variant="warning" type="button">Concluir</button>
        <button @click="deleteTask(index)" variant="danger" type="button">Remover</button>
      </li>
    </ul>
  </div>
  </div>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: "HomeComponent",
  data() {
    return {
      inputTask: "",
      tasks: [],
      pesquisarInput: "",
      loading: false,
      pesquisando: false
    }
  },
  /*async created() {
    console.log("Criado");
    this.loading = true
    await this.getList()
    this.loading = false
  },*/
  computed: {
    ...mapGetters({
    listAtivo: 'listaConcluido'
  }),
    ...mapState(["todoList"]),
    listaPesquisada() {
      const pesquisa = this.todoList.filter(task => task.includes(this.pesquisarInput))
      return pesquisa
    }
  },
  methods: {
    ...mapActions(['completeTask']),
      
    addTask(event = null) {
      console.log(event)
      if ((event && event.key == 'Enter') || (event == null && this.inputTask)) {
        this.$store.commit('addTodo', this.inputTask)
        this.inputTask = ""
      }
    },
    deleteTask(index) {
      this.$store.commit('removeTodo', {index, context: "todoList"})
    },
    pesquisar() {
      this.pesquisando = true
    },
    completeTask(index){
      this.$store.commit('completeTask', index)
      this.$router.push('/ativos', index)
    },
    desmarcarTask(index){
      this.$store.commit('desmarcarTask', index)
      this.router.push('/', index)
    },
  }
}
</script>


<style>
#app {
  font-family:  Helvetica, sans-serif;
   -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  background-color: #ffebc8;
  margin: 0 auto;
  padding: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh; 
  background-color: #ffe1aa;
}

.task-list-container {
  max-width: 500px; /* Defina a largura máxima para a lista de tarefas */
}

.title {
  color: #FF4500;
  font-size: 30px;
  margin-bottom: 10px;
}

.task-list {
  list-style-type: none;
  padding: 30px;
  
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  background-color: #fff;
}

.task-actions {
  display: flex;
  gap: 5px;
  margin-left: 60px;
}

.task-action-btn {
  background-color: #f0ad4e;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 3px 8px;
  cursor: pointer;
  margin-left: 20px;
}

.delete-btn {
  background-color: #d9534f;
}

.active-task-list {
  margin-top: 20px;
}


</style>