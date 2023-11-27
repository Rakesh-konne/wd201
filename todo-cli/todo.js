const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1)),
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1)),
);

const todoList = () => {
  var all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let res = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate === yesterday) {
        res.push(all[i]);
      }
    }
    return res;
  };

  const dueToday = () => {
    let res = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate === today) {
        res.push(all[i]);
      }
    }
    return res;
  };

  const dueLater = () => {
    let res = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate === tomorrow) {
        res.push(all[i]);
      }
    }
    return res;
  };

  const toDisplayableList = (list) => {
    let result = "";
    for (let i = 0; i < list.length - 1; i++) {
      result +=
        `[${list[i].completed === true ? "x" : " "}] ${list[i].title} ${
          list[i].dueDate === today ? "" : list[i].dueDate
        }` + "\n";
    }
    return (
      result +
      `[${list[list.length - 1].completed === true ? "x" : " "}] ${
        list[list.length - 1].title
      } ${
        list[list.length - 1].dueDate === today
          ? ""
          : list[list.length - 1].dueDate
      }`
    );
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
