import React from "react";

const FormInput = (props) => {
    const { label, name, type, defaultValue, classname = "input input-bordered" } = props;
    return (
        <label className="form-control">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className= {classname}
            />
        </label>
    );
};

export default FormInput;
