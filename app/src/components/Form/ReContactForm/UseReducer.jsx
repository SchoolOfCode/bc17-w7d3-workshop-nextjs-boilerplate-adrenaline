// Initial state of the form and error message which will be updated based on user input but start as empty
export const initialFormState = {
    fields: {
      name: "",
      postcode: "",
      house: "",
      city: "",
      number: "",
      email: "",
    },
    errorStatus: "",
  };
  
  // Update the state based on which input field is being changed
  // switch statement to handle different types of actions that can be dispatched
  export const formReducer = (state, action) => {
    switch (action.type) {
      // case to handle input text changes in the form
      case "HANDLE_INPUT_TEXT":
        return {
          ...state,
          // Update the specific field that changed in the fields object
          // [action.field] is the key in the fields object that we want to update
          // action.payload is the value that we want to update the key with
          [action.field]: action.payload,
        };
      // below case to handle form submission error
      case "HANDLE_ERROR":
        return {
          ...state,
          // Update the error message
          error: action.payload,
        };
      // default case to return the state if no action type matches which means no changes to the state
      default:
        return state;
    }
  };