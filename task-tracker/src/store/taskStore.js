import { create } from 'zustand';
import useMessageStore from './messageStore';

function tasksStored() {
    return JSON.parse(window.localStorage.getItem('tasks') || '[]')
}

function addTask(task) {
    window.localStorage.setItem('tasks', JSON.stringify([...tasksStored(), task]));
}

function updateTask(id) {
    window.localStorage.setItem('tasks', JSON.stringify(tasksStored().map(e => e.id === id ? { ...e, completed: !e.completed }: e)))
}

function deleteTask(id) {
    window.localStorage.setItem('tasks', JSON.stringify(tasksStored().filter(e => e.id !== id)))
}

const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => {
        try {
            if (!task.title || task.title === '') {
                throw new Error('task title must not be empty')
            }
            set((state) => ({ tasks: [...state.tasks, task] }))
            addTask(task)
        } catch (e) {
            useMessageStore.getState().setMessage(e.message, 'error');
        }
    },
    removeTask: (id) => {
        try {
            set((state) => {
                if (!state.tasks.find(task => task.id === id)) {
                    throw new Error('task not found')
                }
                return { tasks: state.tasks.filter(task => task.id !== id) }
            });
            deleteTask(id)
        } catch (e) {
            useMessageStore.getState().setMessage(e.message, 'error');
        }
    },
    toggleTask: (id) => {
        try {
            set((state) => {
                const task = state.tasks.find(task => task.id === id)
                if (!task) {
                    throw new Error('task not found')
                }
                return {
                    tasks: state.tasks.map(task =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    )
                }
            });
            updateTask(id);
        } catch (e) {
            useMessageStore.getState().setMessage(e.message, 'error');
        }
    },
    fetchTasks: async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            set({ tasks: [...data.slice(0, 5), ...tasksStored()] });
            useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
        } catch (e) {
            useMessageStore.getState().setMessage('Error fetching tasks ' + e.message, 'error');
        }
    },
}));

export default useTaskStore;