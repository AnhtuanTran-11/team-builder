import React from 'react';

export default function TeamMemberForm(props) {

    const { values, update, submit } = props;

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);
    };

    const onSubmit = event => {
        event.preventDefault();
        submit();
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Name
                    <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
                <label>
                    Email
                    <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder="Type an email..."
                    maxLength="30"
                    />
                </label>
                <label>
                    Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value="">---Select a Role---"</option>
                        <option value="Backend engineer">Backend engineer</option>
                        <option value="Frontend engineer">Frontend engineer</option>
                        <option value="Fullstack engineer">Fullstack engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>

                <div>
                    <button onChange={onChange} type='submit' >Submit</button>
                </div>
            </div>
        </form>
    )
}