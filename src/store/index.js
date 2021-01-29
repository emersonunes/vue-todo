/* eslint-disable no-debugger */
import Vue from 'vue';

const store = {
    state: {
        todos: [{
                _id: '1',
                title: 'Walk the dog',
                description: 'To the Park!'
            },
            {
                _id: '2',
                title: 'Andar de mota',
                description: 'outra veZ?'
            },
            {
                _id: '3',
                title: 'Frango',
                description: 'sem sal'
            },
            {
                _id: '4',
                title: 'Um título bonito',
                description: 'na sanita, porra!'
            },
            {
                _id: '5',
                title: 'fdjadhsadhadsad',
                description: 'descrição'
            },
        ],
    },
    actions: {
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7);
            state.todos.push(todo);
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id;
            });
            Vue.set(state.todos, index, todoToUpdate);
        },
        deleteTodo(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId;
            });
            state.todos.splice(index, 1);
        },
    },

};

store.dispatch = function(action, payload) {
    if (!this.actions[action]) {
        throw new Error(`Action ${action} is not defined in the store!`);
    }
    return this.actions[action](this.state, payload);
};

export default store;