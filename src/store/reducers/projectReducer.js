import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types'

const INITIAL_STATE = {
    projects: [
        {id: '1', title: 'help me find peach please', content: 'blah blah blah'},
        {id: '2', title: 'help me find mario please', content: 'blah blah blah'},
        {id: '3', title: 'help me find luigi please', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            return state
        case CREATE_PROJECT_ERROR:
            return console.log('create project error', action.err)
        default:
            return state
    }
}

export default projectReducer