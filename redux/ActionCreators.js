import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchPosts = () => (dispatch) => {
    
    dispatch(postsLoading());

    return fetch(baseUrl + 'posts')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(posts => dispatch(addPosts(posts)))
    .catch(error => dispatch(postsFailed(error.message)));
};

export const postsLoading = () => ({
    type: ActionTypes.POSTS_LOADING
});

export const postsFailed = (errmess) => ({
    type: ActionTypes.POSTS_FAILED,
    payload: errmess
});

export const addPosts = (posts) => ({
    type: ActionTypes.ADD_POSTS,
    payload: posts
});



export const fetchConfigs = () => (dispatch) => {
    
    dispatch(configsLoading());

    return fetch(baseUrl + 'configs')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(configs => dispatch(addConfigs(configs)))
    .catch(error => dispatch(configsFailed(error.message)));
};

export const configsLoading = () => ({
    type: ActionTypes.CONFIGS_LOADING
});

export const configsFailed = (errmess) => ({
    type: ActionTypes.CONFIGS_FAILED,
    payload: errmess
});

export const addConfigs = (configs) => ({
    type: ActionTypes.ADD_CONFIGS,
    payload: configs
});



export const fetchRefs = () => (dispatch) => {
    
    dispatch(refsLoading());

    return fetch(baseUrl + 'refs')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(refs => dispatch(addRefs(refs)))
    .catch(error => dispatch(refsFailed(error.message)));
};

export const refsLoading = () => ({
    type: ActionTypes.REFS_LOADING
});

export const refsFailed = (errmess) => ({
    type: ActionTypes.REFS_FAILED,
    payload: errmess
});

export const addRefs = (refs) => ({
    type: ActionTypes.ADD_REFS,
    payload: refs
});



export const fetchNotes = () => (dispatch) => {
    
    dispatch(notesLoading());

    return fetch(baseUrl + 'notes')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(notes => dispatch(addNotes(notes)))
    .catch(error => dispatch(notesFailed(error.message)));
};

export const notesLoading = () => ({
    type: ActionTypes.NOTES_LOADING
});

export const notesFailed = (errmess) => ({
    type: ActionTypes.NOTES_FAILED,
    payload: errmess
});

export const addNotes = (notes) => ({
    type: ActionTypes.ADD_NOTES,
    payload: notes
});



export const fetchCategories = () => (dispatch) => {
    
    dispatch(categoriesLoading());

    return fetch(baseUrl + 'categories')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(categories => dispatch(addCategories(categories)))
    .catch(error => dispatch(categoriesFailed(error.message)));
};

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errmess
});

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories
});



export const fetchContents = () => (dispatch) => {
    
    dispatch(contentsLoading());

    return fetch(baseUrl + 'contents')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(contents => dispatch(addContents(contents)))
    .catch(error => dispatch(contentsFailed(error.message)));
};

export const contentsLoading = () => ({
    type: ActionTypes.CONTENTS_LOADING
});

export const contentsFailed = (errmess) => ({
    type: ActionTypes.CONTENTS_FAILED,
    payload: errmess
});

export const addContents = (contents) => ({
    type: ActionTypes.ADD_CONTENTS,
    payload: contents
});



export const fetchFeedback = () => (dispatch) => {
    
    dispatch(feedbackLoading());

    return fetch(baseUrl + 'feedback')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(feedback => dispatch(addFeedback(feedback)))
    .catch(error => dispatch(feedbackFailed(error.message)));
};

export const feedbackLoading = () => ({
    type: ActionTypes.FEEDBACK_LOADING
});

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess
});

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});



export const fetchFlow = () => (dispatch) => {
    
    dispatch(flowLoading());

    return fetch(baseUrl + 'flow')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(flow => dispatch(addFlow(flow)))
    .catch(error => dispatch(flowFailed(error.message)));
};

export const flowLoading = () => ({
    type: ActionTypes.FLOW_LOADING
});

export const flowFailed = (errmess) => ({
    type: ActionTypes.FLOW_FAILED,
    payload: errmess
});

export const addFlow = (flow) => ({
    type: ActionTypes.ADD_FLOW,
    payload: flow
});



