export const initialState = {
  selectedId: 0,
  message: ["Hola", "", ""],
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: state.message.map((m, ii) =>
          ii === action.contactId ? action.message : m
        ),
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: state.message.map((m, ii) =>
          ii === action.contactId ? "" : m
        ),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
