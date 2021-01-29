<!-- html part  -->
/* eslint-disable no-debugger */
<template>
<div id="app">
    <div class="todo-wrapper">
        <div class="todo-container">
            <!-- <TodoList /> -->
            <!-- melhor sintaxe -->
            <todo-list :todos="todos" />
            <div class="todo-create-btn-container">
                <todo-create @formSubmitted="createTodo" />
            </div>
        </div>
    </div>
</div>
</template>
<!-- end html -->
<!-- js part -->
<script>
import playground from './playground'
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate'
import store from '@/store'

export default {
    name: 'App',
    components: {
        TodoList,
        TodoCreate
    },
    data() {
        return {
            todos: store.state.todos,
        }
    },
    //This function is run automaticaly by VUE Framework
    created() {
        playground();
    },
    methods: {
        createTodo(todo) {
            store.dispatch('createTodo', todo);
        },
    },

}
</script>
<!-- end js -->
<!-- styles -->
<style lang="scss">
$color: #cecece;
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: black;
    margin-top: 60px;
}
.app-form {
    .label {
        display: block;
        font-size: 22px;
        font-weight: bold;
        color: black;
    }
    .form-input {
        padding: 5px;
        font-size: 17px;
    }
    .form-control {
        margin-bottom: 10px;
    }
}
.app-button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #795899;
    color: white;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    &.is-primary {
        background-color: #47ca47;
    }
    &.is-warning {
        background-color: #ffa753;
    }
    &.is-danger {
        background-color: #ff5a5a;
    }
    &.is-medium {
        padding: 20px;
    }
}

.todo {
    &-create-btn-container {
        margin: 10px;
    }
    &-wrapper {
        display: flex;
        justify-content: center;
        /* flex-direction: column; */
        width: 100%;
        /* height: 2000px; */
    }
    &-container {
        display: flex;
        flex-direction: column;
        width: 400px;
        min-height: 200px;
        background-color: $color;
        border-radius: 5px;
    }
}
.app-error {
    color: #ff1212;
    padding: 15px 5px;
}
.form-error {
    margin: 10px 0;
}
</style>
<!-- end style -->
