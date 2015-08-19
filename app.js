new Vue({
	el: '#tasks',

	data: {
		tasks: [],
		newTask: ''
	},

	computed: {
		completions: function() {
			return this.tasks.filter(function(task) {
				return task.completed;
			});
		},
		remaining: function() {
			return this.tasks.filter(function(task) {
				return ! task.completed;
			});
		},
	},

	methods: {
		addTask: function(e) {
			e.preventDefault();
			if( ! this.newTask) return;
			this.tasks.push({
				body: this.newTask,
				completed: false
			});
			this.newTask = '';
			this.$$.newTask.focus();
		},
		editTask: function(task) {
			this.removeTask(task);
			this.newTask = task.body;
			this.$$.newTask.focus();
		},
		completeTask: function(task) {
			task.completed = true;
		},
		uncompleteTask: function(task) {
			task.completed = false;
		},
		removeTask: function(task) {
			this.tasks.$remove(task);
		}
	}
})