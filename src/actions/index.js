import { CREATE_TASK, EDIT_TASK, SORT_TASK, REMOVE_TASK } from './types'
import uuid from 'react-uuid'

export const editTask = (id, params = {})=> {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params,
        },
    }
}

export const createTask = ({title, description, dueDate}) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: uuid(),
            title,
            description,
            dueDate,
            status: "Pending",
        },
    }
}

export const sortTask = () => {
    return {
        type: SORT_TASK
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id,
    }
}