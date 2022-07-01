import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export interface IExpense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const DUMMY_EXPENSES: IExpense[] = [
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
];

interface ExpensesOutputProps {
  expensesPeriod: string;
}

const ExpensesOutput = ({ expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName="지난 7일 간" />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
