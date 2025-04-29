// Service queuing will be implemented here
export const queue = {
  tasks: [] as (() => Promise<any>)[],
  add: (task: () => Promise<any>) => {
    queue.tasks.push(task);
  },
  process: async () => {
    for (const task of queue.tasks) {
      await task();
    }
    queue.tasks = [];
  },
}; 