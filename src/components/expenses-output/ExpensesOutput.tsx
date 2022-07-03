import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export interface IExpense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export const DUMMY_EXPENSES: IExpense[] = [
  {
    id: "el",
    description: "신발",
    amount: 50000,
    date: new Date("2022-04-19"),
  },
  {
    id: "e2",
    description: "스마트폰",
    amount: 600000,
    date: new Date("2022-05-29"),
  },
  {
    id: "e3",
    description: "슬랙스",
    amount: 25000,
    date: new Date("2022-06-05"),
  },
  {
    id: "e4",
    description: "맥북",
    amount: 2500000,
    date: new Date("2022-07-01"),
  },
];

interface ExpensesOutputProps {
  expenses: IExpense[];
  expensesPeriod: string;
  fallbackText: string;
}

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.mainColor,
  },
  infoText: {
    color: GlobalStyles.colors.whiteColor,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
