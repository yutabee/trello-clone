import React from 'react'
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {

    const handleSubmit = (e) => {
        const taskId = uuid();
        e.preventDefault(); //リロードを無くす
        // console.log(e);
      
         //空ならばhandleSbumitの処理を終了する
    if (inputText === "") {
      return;
    }

        //カードを追加する。
        setTaskList([
            ...taskList,
            {
              id: taskId,
              draggableId: `task-${taskId}`, //dragableIDはidはstringじゃないとだめ
              text: inputText,
            },
        ]);
        // console.log(...taskList);
        // console.log(inputText);
        setInputText('');   //カードを追加したら空にする
    };

    const handleChange = (e) => {
      setInputText(e.target.value);
    //   console.log(e.target.value);
  };

  return (
    <div>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder='add a task'
                  className='taskAddInput'
                  onChange={handleChange}
                  value={inputText}  //inputTextの内容をリアルタイムで読み取るので送信すると空になる
              />
          </form>
    </div>
  )
}
