import React, { useState } from 'react'

export const TaskCardTitle = () => {

    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState('Today');

    const handleClick = () => {
        setIsClick(true); //inputformを表示
        console.log(isClick);
    };

    const handleChange = (e) => { //onchangeはinputのプロパティに変更毎に実行
        console.log(e.target.value);
        setInputCardTitle(e.target.value);  //titleのstateを更新
    };

    const handleSubmit = (e) => { //onsubmitはenterkeyで実行
        e.preventDefault();  //enterkeyを押すと実行されます
        setIsClick(false); //enterでinputを閉じる
    };

    const handleBlur = () => { //onBlur=>inputタグ以外でクリックされた場合に発火するプロパティ
        setIsClick(false);
    };

    return (
        <div onClick={handleClick} className="taskCardTitleInputArea">
            {isClick ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="taskCardTitleInput"
                        autoFocus  //要素をクリックすると勝手にフォーカスする
                        onChange={handleChange}
                        onBlur={handleBlur} //要素以外でクリックすると発火
                        maxLength="10"
                    />
                </form>
            ) : (
                <h3>{inputCardTitle}</h3>
            )}
        </div>
    );
};
