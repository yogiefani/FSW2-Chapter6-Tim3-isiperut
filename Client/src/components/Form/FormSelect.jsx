import React from "react";

const FormSelect = (props) => {
    const { label, name, list, defaultValue } = props;
    return (
        <div className="form-control">
            <label className="label">
                <span className="capitalize label-text">{label}</span>
            </label>
            <select
                name={name}
                className="select select-bordered"
                defaultValue={defaultValue}
                id=""
            >
                {list.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormSelect;