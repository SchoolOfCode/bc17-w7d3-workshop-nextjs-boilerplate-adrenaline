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
  submitStatus: false,
  loading: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    // Handle input text changes in the form
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        // Update the specific field that changed in the fields object
        fields: {
          ...state.fields, // Copy the existing fields
          [action.field]: action.payload, // Update the specific field
        },
      };

    // Handle form submission error
    case "HANDLE_ERROR":
      return {
        ...state,
        // Update the error message
        errorStatus: action.payload,
        loading: false,
      };

    // Handle submitting status
    case "FORM_SUBMITTING":
      return {
        ...state,
        loading: true
      };

    // Handle success message
    case "FORM_SUCCESS":
      return {
        ...state,
        submitStatus: true
      };

    // Default case to return the state if no action type matches
    default:
      return state;
  }
};