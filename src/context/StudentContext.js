import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
import moment from 'moment'

const studentReducer = (state, action) => {
    switch (action.type) {
      case 'get_classes':
          if (action.payload === undefined ) {
            return state;
          }
          return action.payload;
        case 'get_students':
          if (action.payload === undefined ) {
            return state;
          }
          return action.payload;
        case 'edit_student':
          return state.map(student => {
          return student.id === action.payload.id ? action.payload : student;
          });
        case 'delete_student':
          return state.filter(student => student.id !== action.payload);
        default:
          return state;
    }
  };

  // ADD

  const addStudent = () => {
    return async (name, nationality, level, callback) => {
      await jsonServer.post(`/students`, { name, nationality, level })
      .then((response) => {
        console.log(response);
      }), (error) => {
        console.log(error);
      }
      
      if (callback) {
        callback();
      }
    };
  };

  const addNote = () => {
    return async (id, title, content, callback) => {
      const date = moment().format('MMMM Do YYYY, h:mm:ss a');

      await jsonServer.post(`/notes`, { id, title, content })
      .then((response) => {
        console.log(response);
      }), (error) => {
        console.log(error);
      };
  
      callback();
    };
  };

  const addClass = () => {
    return async (date, name, length, callback) => {
      console.log(date, name, length)
      await jsonServer.post('/classes', { "date": date, "student": name, "classLength": length })
      .then((response) => {
        console.log(response);
      }), (error) => {
        console.log(error);
      }
      
      callback();
    };
  };

  // DELETE

  const deleteStudent = dispatch => {
    return async id => {
      await jsonServer.delete(`/students/${id}`)

      dispatch({ type: 'delete_student', payload: id })

      callback();
    }
  }

  // GET

  const getClasses = dispatch => {
    return async () => {
      const response = await jsonServer.get('/classes')
      dispatch({ type: 'get_classes', payload: response.data });
    }
  }

  const getStudents = dispatch => {
    return async () => {
      const response = await jsonServer.get('/students');
  
      dispatch({ type: 'get_students', payload: response.data });
    };
  };

export const { Context, Provider } = createDataContext(
  studentReducer,
  { addStudent, getStudents, deleteStudent, addNote, getClasses, addClass },
  []
);