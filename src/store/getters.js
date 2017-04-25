export const selectedItem = state => {
    const id = state.currentItem.itemId

    if (!id) {
        return {}
    }

    const task = state.taskList.all.find(p => p.id === id)

    if (task) {
        return {
            title: task.title,
            description: task.description
        }
    }

    return {}
}
