import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/'

export function addData(id, name, phone){
    return {type: 'ADD_DATA', id, name, phone}
  }
  
  function addPhoneBooksFailure(id){
    console.log('action',id);
    return {type: 'ADD_PHONEBOOKS_FAILURE', id}
  }
  
  function addPhoneBooksSuccess(phonebook){
    
    return {type: 'ADD_PHONEBOOKS_SUCCESS', phonebook}
  }

  export function addPHoneBook(name, phone){
    
    let id = Date.now()
    let sent = true
    return dispatch => {
      dispatch(addData(id, name, phone, sent))
      return request
      .post(`${SERVER_URL}phonebooks`)
      .type('form')
      .send({id: id})
      .send({name: name})
      .send({phone: phone})
      .send({sent: sent})
      .end((err, res) => {
        // console.log('nyoba add',res.body);
        if(err){
          console.error(err)
          dispatch(addPhoneBooksFailure(id))
        }else{
          dispatch(addPhoneBooksSuccess(res.body.data))
        }
      })
    }
  }
  export function ResendAdd(id, name, phone){
    
     let sent = true
    
    return dispatch => {
      return request
      .post(`${SERVER_URL}phonebooks`)
      .type('form')
      .send({id: id})
      .send({name: name})
      .send({phone: phone})
      .send({sent: sent})
      .end((err, res) => {
        // console.log('nyoba add',res.body);
        if(err){
          console.error(err)
          dispatch(addPhoneBooksFailure(id))
        }else{
          dispatch(addPhoneBooksSuccess(res.body.data))
        }
      })
    }
  }
  export function editPhoneBook(id, name, phone){
    console.log(id, name, phone);
    
    
    return dispatch => {
      dispatch(editData(id, name, phone))
      return request
      .put(`${SERVER_URL}phonebooks/${id}`)
      .type('form')
      .send({name: name})
      .send({phone: phone})
      .end((err, res) => {
        // console.log('nyoba add',res.body);
        if(err){
          console.error(err)
          dispatch(loadPhoneBooksFailure())
        }else{
          dispatch(editData(res.body.data))
        }
      })
    }
    
  }
  
  export function editData(id, name, phone){
    return {type: 'EDIT_DATA', id, name, phone}
  }
  
  export function deleteData(id){
    return {type: 'DELETE_DATA', id}
  }
  export function deletePhoneBook(id){
    
    return dispatch => {
      return request
      .delete(`${SERVER_URL}phonebooks/${id}`)
      .end((err, res) => {
        // console.log('nyoba delete',res.body);
        if(err){
          console.error(err)
          dispatch(loadPhoneBooksFailure())
        }else{
          dispatch(deleteData(id))
        }
      })
    }
  }
  
  export function deleteAll(){
    return {type: 'DELETE_ALL'}
  }
  
  export function loadPHoneBooks(){
    return dispatch => {
      return request
      .get(`${SERVER_URL}phonebooks`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        // console.log('get coba',res);
        
        if(err){
          console.error(err)
          dispatch(loadPhoneBooksFailure())
        }else{
          dispatch(loadPhoneBooksSuccess(res.body))
        }
      })
    }
  }
  function loadPhoneBooksFailure(){
    return {type: 'LOAD_PHONEBOOKS_FAILURE'}
  }
  
  function loadPhoneBooksSuccess(phonebooks){
    return {type: 'LOAD_PHONEBOOKS_SUCCESS', phonebooks}
  }
  