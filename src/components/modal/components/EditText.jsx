import React from "react";
import './edit-text.scss';

export const EditText = ({title='', text='', editTitle, editText}) => {
    return (
        <div className="edit-text">
            <div className="title-wrapper">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title of the text"
                    defaultValue={title}
                    onChange={editTitle}
                    />
            </div>
            <div className="text-wrapper">
                <label htmlFor="post-text">Text</label>
                <textarea
                    name="post-text"
                    id="post-text"
                    rows="10"
                    placeholder="Text of the post"
                    defaultValue={text}
                    onChange={editText}
                ></textarea>
            </div>
        </div>
    );
};
