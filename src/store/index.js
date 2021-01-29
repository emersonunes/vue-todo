/* eslint-disable no-debugger */
import Vue from 'vue';

const INITIAL_DATA = {
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
};

const store = {
    state: {
        todos: [],
    },
    actions: {
        initStore(state) {
            const todos = localStorage.getItem('my_todos');
            if (!todos) {
                Vue.set(state, 'todos', INITIAL_DATA.todos);
            } else {
                Vue.set(state, 'todos', JSON.parse(todos));
            }
            return state.todos;
        },

        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7);
            state.todos.push(todo);
            return state.todos;
        },

        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id;
            });
            Vue.set(state.todos, index, todoToUpdate);
            return state.todos;
        },

        deleteTodo(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId;
            });
            state.todos.splice(index, 1);
            return state.todos;
        },
    },

};

function persistData(value) {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem('my_todos', stringifyValue);
}

store.dispatch = function(action, payload) {
    if (!this.actions[action]) {
        throw new Error(`Action ${action} is not defined in the store!`);
    }
    const result = this.actions[action](this.state, payload);

    if (!result) {
        return
    }
    persistData(result);
    return result;
};

export default store;