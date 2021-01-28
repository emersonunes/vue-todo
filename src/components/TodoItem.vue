<template lang="html">
    <div v-if="!editMode" class="todo-item-container">
        <div class="todo-item-content-title">
            {{title}}
        </div>
        <div class="todo-item-content-description">
            {{description}}
        </div>
        <button @click="editMode = true" class="app-button is-warning">Edit</button>
        <button @click="deleteTodo" class="app-button is-danger">Delete</button>
    </div>
    <div v-else class="todo-item-container">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input :value="title" type="text" class="form-input">
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea :value="description" type="text" class="form-input" cols="30" rows="5"></textarea>
            </div>
            <button @click.prevent="editTodo" class="app-button is-warning">Update</button>
            <button @click.prevent="editMode = false" class="app-button is-danger">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    // props: ['title', 'description'],
    props: {
        title: {
            type: String,
            required: true,
            default: 'No title',
        },
        description: {
            type: String,
            required: false,
            default: 'No Description',
        },
    },
    data() {
        return {
            editMode: false,
        }
    },
    methods: {
        // editTodo() {
        //     this.editMode = true;
        // },
        deleteTodo() {
            alert('vou eliminar');
        }
    }
}
</script>

<style lang="scss" scoped>
.app-button {
    font-size: 15px;
    &.is-warning {
        margin-right: 5px;
    }
    &.is-danger {
        margin-right: 5px;
    }
}
.todo-item {
    &-content {
        margin-bottom: 10px;
        &-title {
            font-weight: bold;
        }
        &-description {
            font-size: 19px;
        }
    }
}
</style>
