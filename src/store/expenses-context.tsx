import { createContext, Dispatch, useContext, useReducer } from "react";
import {
  DUMMY_EXPENSES,
  IExpense,
} from "../components/expenses-output/ExpensesOutput";

type initialStateType = {
  expenses: IExpense[];
};

type ActionType =
  | { type: "ADD"; payload: IExpense }
  | { type: "UPDATE"; payload: IExpense }
  | { type: "DELETE"; payload: string };

type ExpenseDispatch = Dispatch<ActionType>;

const ExpenseContext = createContext<initialStateType>({
  expenses: DUMMY_EXPENSES,
});
const ExpenseDispatchContext = createContext<ExpenseDispatch | null>(null);

const expenseReducer = (
  state: initialStateType,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADD":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "UPDATE":
      const copiedExpense = [...state.expenses];
      let expenseToBeUpdated = copiedExpense.find(
        ({ id }) => id === action.payload.id
      );
      expenseToBeUpdated = action.payload;
      return { ...state, expenses: copiedExpense };
    case "DELETE":
      const newExpenses = [...state.expenses].filter(
        ({ id }) => id !== action.payload
      );
      return { ...state, expenses: newExpenses };
    default:
      throw new Error("잘못된 action");
  }
};

interface ExpenseProviderProps {
  children: React.ReactNode;
}

export const ExpenseContextProvider = ({ children }: ExpenseProviderProps) => {
  const [state, dispatch] = useReducer(expenseReducer, {
    expenses: DUMMY_EXPENSES,
  });

  return (
    <ExpenseContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error("Context를 찾을 수 없습니다.");
  return context;
};

export const useExpenseDispatch = () => {
  const dispatch = useContext(ExpenseDispatchContext);
  if (!dispatch) throw new Error("Provider를 찾을 수 없습니다");
  return dispatch;
};
