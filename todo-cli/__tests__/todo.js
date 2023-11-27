/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1),
      ).toLocaleDateString("en-CA"),
    });
    add({
      title: "dueToday Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
      title: "dueLater Todo",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1),
      ).toLocaleDateString("en-CA"),
    });
  });
  test("should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("should mark a todo as complete ", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue todos", () => {
    const overdueTodos = overdue();
    expect(overdueTodos.length).toBe(1);
    expect(overdueTodos[0].title).toBe("Overdue Todo");
  });

  test("should retrieve dueToday todos", () => {
    const overdueTodos = dueToday();
    expect(overdueTodos.length).toBe(2);
    expect(overdueTodos[0].title).toBe("dueToday Todo");
  });

  test("should retrieve  dueLater todos", () => {
    const overdueTodos = dueLater();
    expect(overdueTodos.length).toBe(1);
    expect(overdueTodos[0].title).toBe("dueLater Todo");
  });
});
