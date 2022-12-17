<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="todo">
    <div class="title has-text-centered">ToDo</div>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Add a todo!"
            v-model="newTodoContent"
          />
        </p>
        <p class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </p>
      </div>
    </form>
  </div>
  <div
    v-for="todo in todos"
    class="card mb-5"
    :class="{ 'has-background-success-light': todo.done }"
  >
    <div class="card-content">
      <div class="content">
        <div class="columns is-vcentered">
          <div
            class="column"
            :class="{ 'has-text-success line-through': todo.done }"
          >
            {{ todo.content }}
          </div>
          <div class="column is-5 has-text-right">
            <button
              @click="toggleDone(todo.id)"
              class="button"
              :class="todo.done ? 'is-success' : 'is-light'"
            >
              &check;
            </button>
            <button class="button is-danger ml-2" @click="deleteTodo(todo.id)">
              &cross;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { addDoc } from "firebase/firestore";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase";

const todosCollection = collection(db, "todos");
const todosCollectionQuery = query(todosCollection, orderBy("date", "desc"));

const todos = ref([
  // {
  //   id: "id1",
  //   content: "kill max",
  //   done: false,
  // },
  // {
  //   id: "id2",
  //   content: "kill max again",
  //   done: true,
  // },
]);

onMounted(() => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      };
      fbTodos.push(todo);
    });
    todos.value = fbTodos;
  });
});

const newTodoContent = ref("");

const addTodo = () => {
  addDoc(todosCollection, {
    content: newTodoContent.value,
    done: false,
    date: Date.now(),
  });

  newTodoContent.value = "";
};

const deleteTodo = async (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
  await deleteDoc(doc(db, "todos", id));
};

const toggleDone = (id) => {
  updateDoc(doc(db, "todos", id), {
    done: !todos.value.find((todo) => todo.id === id).done,
  });
};
</script>

<style>
@import "bulma/css/bulma.min.css";

.todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>
