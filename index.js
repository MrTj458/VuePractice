let app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	}
})

let app2 = new Vue({
	el: "#app-2",
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})

let app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

let app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn Javascript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

let app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

let app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue.js!'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

let app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Other stuff' },
		]
	}
})

let app8 = new Vue({
	el: '#app-8',
	data: {
		newTodo: '',
		todos: [
			{ id: 1, text: 'learn vue' },
			{ id: 2, text: 'learn express' },
			{ id: 3, text: '???' },
			{ id: 4, text: 'profit' },
		]
	},
	methods: {
		addTodo: function (e) {
			if (this.newTodo !== '') {
				this.todos.push({ id: this.todos[this.todos.length - 1].id + 1, text: this.newTodo })
				this.newTodo = ''
			}
		}
	}
})
