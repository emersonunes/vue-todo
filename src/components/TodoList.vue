<template lang="html">
    <div class="todo-list">
        <div class="todo-items" v-if="todos && todos.length > 0">
            <!-- <todo-item v-bind:title="'Walk the dog'" v-bind:description="'To the park'"/> -->
            <!-- SINTAXE MAIS CURTA -->
            <!-- <todo-item :title="'Andar de mota'" :description="'E voltar atrás'"/> -->
            <!-- enviar diretamente apenas e como string -->
            <!-- <todo-item title="Foo" description="bar"/> -->
            <!-- enviar variáveis diretamente -->
            <!-- <todo-item :title="todoTitle" :description="todoDescription"/> -->
            <todo-item
            v-for="todo in todos"
            :key="todo._id"
            :_id="todo._id"
            :title="todo.title"
            :description="todo.description"
            />
        </div>
        <div class="todo-else" v-else>
            No todos, please create one!
        </div>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    components: {
        TodoItem
    },
    props: {
        todos: {
            required: true,
            type: Array,
        }
    }
}
</script>

<style lang="scss" scoped>
.todo {
    &-list {
        flex: 1;
    }
    &-else {
        padding: 20px;
        font-size: 23px;
        font-weight: bold;
        text-align: center;
    }
    &-item-container {
        background-color: gray;
        min-height: 70px;
        margin: 10px;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 23px;
    }
}
</style>
