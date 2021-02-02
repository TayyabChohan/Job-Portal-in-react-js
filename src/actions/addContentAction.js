import axios from "axios";
import qs from "qs";
import {
    ADD_CONTENT,
    SELECT_CONTENT,
    GET_CONTENT,
    GET_JOB_CATEGORY,
    GET_ALL_CONTENT,
    DELETE_CONTENT,
    UPDATE_CONTENT,
    GET_JOB,
    SiGNUP_,
    LOGIN_
} from '../actions/allAction';
// import history from '../history/history';
import { toastr } from "react-redux-toastr";
let getUrl = window.location;
let finalurl = getUrl.protocol + "//" + getUrl.hostname;

export const add_content = (data) => {
    console.log(data)
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/addContent`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(data),
            url
        }

        axios(options)
            .then(response => {
                console.log(response)
                dispatch({
                    type: ADD_CONTENT,
                    response: response.data.tableData[0]
                })
                console.log(response)
            })
            .catch(err => {
                console.log(err.message)
            })


    }
}
export const selectContent = () => {
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/selectContent`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(),
            url
        }

        axios(options)
            .then(response => {
                dispatch({
                    type: SELECT_CONTENT,
                    response: response.data.tableData
                })
            })
            .catch(err => {
                console.log(err.message)
            })


    }

}
export const getContent = (id) => {
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/getContent`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify({ id }),
            url
        }

        axios(options)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_CONTENT,
                    response: response.data.tableData
                })
            })
            .catch(err => {
                console.log(err.message)
            })


    }

}
export const getJobCategory = (data) => {
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/getJobCategory`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(data),
            url
        }

        axios(options)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_JOB_CATEGORY,
                    response: response.data.tableData
                })
                dispatch({
                    type: GET_JOB,
                    res: response.data.all
                })
            })
            .catch(err => {
                console.log(err.message)
            })

    }

}
export const GetAllContent = () => {
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/GetAllContent`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(),
            url
        }

        axios(options)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_ALL_CONTENT,
                    response: response.data.tableData
                })
            })
            .catch(err => {
                console.log(err.message)
            })

    }

}
export const delete_content = (id) => {
    return dispatch => {

        const url = `${finalurl}/cms3/cms_c/add_content_c/delete_content`
        const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify({ id }),
            url
        }

        axios(options)
            .then(response => {
                console.log(response)
                dispatch({
                    type: DELETE_CONTENT,
                    response: response
                })
            })
            .catch(err => {
                console.log(err.message)
            })

    }

}

export const Update_content = (data) => {
    return dispatch => {
        const url = `${finalurl}/cms3/cms_c/add_content_c/Update_content`
        const option = {
            headers: { "content-type": "application/x-www-form-urlencoded" },
            method: 'post',
            data: qs.stringify(data),
            url
        }
        axios(option)
            .then(response => {
                dispatch({
                    type: UPDATE_CONTENT,
                    response: response.data
                })
                    .catch(err => {
                        console.log(err.message)
                    })
            }

            )
    }
}

export const signUp_ = (data) => {
    return dispatch => {
        const url = `${finalurl}/cms3/cms_c/add_content_c/signUp_`
        const option = {
            method: 'POST',
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(data),
            url
        }

        axios(option)
            .then(response => {
                dispatch({
                    type: SiGNUP_,
                    response: response.data
                })
            })
            .catch(err => console.log(err.message))
    }
}

export const login_ = (data) => {
    return dispatch => {
        const url = `${finalurl}/cms3/cms_c/add_content_c/login_`
        const option = {
            method: 'POST',
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(data),
            url
        }
        axios(option)
            .then(response => {
                if (response.data.status == true) {

                    dispatch({
                        type: LOGIN_,
                        response: response.data.result
                    })
                    toastr.success("Success", response.data.result);
                    // localStorage.setItem("login", "true");
                    // history.push('/log')
                    //  CHECKLOGIN :true;
                }
                else {
                    toastr.error("Error", response.data.result);
                }
            })
            .catch(err => console.log(err.message))
    }

}

