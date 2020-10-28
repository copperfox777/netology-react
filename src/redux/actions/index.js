
import {fetchClient} from '../../api/fetchClient'

const coursesRequested = () => { 
  return {
    type: 'FETCH_COURSES_REQUEST'
  };
};

const coursesLoaded = (courses) => {
  return {
    type: 'FETCH_COURSES_SUCCESS',
    payload: courses
  };
};

const coursesError = (error) => {
  return {
    type: 'FETCH_COURSES_FAILURE',
    payload: error
  };
};

const fetchCourses = (timeout) => (dispatch,getState) => {
  dispatch(coursesRequested())
  fetchClient('https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json')
    .then(({data,error}) =>{
      if(error){
        dispatch(coursesError(error))
      } else {
        
        //parse data to store
        const courses=[]
        data.forEach(item =>{
          const title = item.direction.title
          let counter = 0
          item.groups.forEach(element => {
            counter += element.items.length
          })
          courses.push({title,counter})
        })

        dispatch(coursesLoaded(courses))
      }
    })
}; 

export { fetchCourses };
