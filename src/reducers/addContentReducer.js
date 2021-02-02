import { GET_CONTENT, ADD_CONTENT,
     GET_JOB_CATEGORY,
      GET_ALL_CONTENT,
       SELECT_CONTENT,
       DELETE_CONTENT,
       SiGNUP_,
       GET_JOB,
       LOGIN_
         } from '../actions/allAction';

const initialSate = {
    content_array: [],
    get_content_array: [],
    get_job_category: [],
    get_all_content: [],
    all:[],
    signUpArray:[],
    lognArray:[]
}
const addContentReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_CONTENT: {
            return {
                ...state,
                content_array: [...state.content_array ,action.response]
            }
        }
        case SELECT_CONTENT: {
            return {
                ...state,
                content_array: action.response
            }
        }
        case GET_CONTENT: {
            return {
                ...state,
                content_array: action.response

            }
        }
        case GET_JOB_CATEGORY: {
            return {
                ...state,
                get_job_category: action.response,
               
            }
        }
        case GET_ALL_CONTENT: {
            return {
                ...state,
                content_array: action.response
            }
        }
        case DELETE_CONTENT: {
            const content_array=state.content_array.filter(item=>item.id !=action.response)
            return {
                ...state,
                content_array
            }
        }
        case GET_JOB :{
            return{
                ...state,
                all:action.res
            }
        }
        case SiGNUP_:{
            return{
                ...state,
                signUpArray:action.response
            }
        }

        case LOGIN_ :{
            return{
                ...state,
                lognArray:action.response
            }
        }
        // case UPDATE_CONTENT :{
        //     const content_array= state.content_array.slice().map(item=>{
        //         if(item.cont_id== action.CONT_ID)
        //     })
        //     return{
        //         ...state,

        //     }
        // }
        default:
            return state;
    }
}
export default addContentReducer;