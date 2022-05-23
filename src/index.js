import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromList = (id, deleteTarget) => {
  document.getElementById(id).removeChild(deleteTarget);
};

const createImcompleteList = (text) => {
  // div生成
  const listTextDiv = document.createElement("div");
  listTextDiv.className = "list-text";
  listTextDiv.innerText = text;
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(listTextDiv);

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeText = completeButton.previousElementSibling.innerText;
    // divタグ
    const div = document.createElement("div");
    div.className = "list-row";

    const completeDiv = document.createElement("div");
    completeDiv.className = "list-text";
    completeDiv.innerText = completeText;
    div.appendChild(completeDiv);

    // 戻すボタン
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    div.appendChild(returnButton);
    returnButton.addEventListener("click", () => {
      const text = returnButton.previousElementSibling.innerText;
      createImcompleteList(text);
      const deleteTarget = returnButton.parentNode.parentNode;
      deleteFromList("complete-list", deleteTarget);
    });
    // liタグ
    const li = document.createElement("li");
    li.appendChild(div);

    document.getElementById("complete-list").appendChild(li);

    const deleteTarget = completeButton.parentNode.parentNode;
    deleteFromList("imcomplete-list", deleteTarget);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromList("imcomplete-list", deleteTarget);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグ生成
  const li = document.createElement("li");

  // liタグの下にdivとボタンを追加
  li.appendChild(div);

  // ulの中にliを追加
  document.getElementById("imcomplete-list").appendChild(li);
};
