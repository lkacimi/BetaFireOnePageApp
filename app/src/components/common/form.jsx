import React, {Component} from "react";
import * as yup from "yup";
import Input from "./input";
import Select from "./select";
import TextArea from './TextArea'
class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = {abortEarly: false};
        return this.schema.validate(this.state.data, options);

    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = yup.object().shape({[name]: this.schemaDefinition[name]});
        return schema.validate(obj);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.validate()
            .then((bulkRequest) => {
                this.doSubmit();
            })
            .catch(errors => {
                if(!errors.inner) {
                    return;
                }
                const mappedErrors = {};
                for (let item of errors.inner) {
                    mappedErrors[item.path] = item.message;
                }
                this.setState({errors: mappedErrors});
            });
    };

    handleChange = ({currentTarget: input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data});
        const errors = {...this.state.errors};
        this.validateProperty(input)
            .then(() => {
                delete errors[input.name];
                this.setState({errors});
            })
            .catch(error => {
                errors[input.name] = error.errors[0];
                this.setState({errors});
            });
    };

    renderButton = (label) => {
        return (
            <button className="btn btn-primary">
                {label}
            </button>
        );
    };

    renderSelect(name, label, options) {
        const {data, errors} = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderInput(name, label, type = "text") {
        const {data, errors} = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderTextArea(name, label) {
        const {data, errors} = this.state;

        return (
            <TextArea
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderFileInput(name) {
        const {data, errors} = this.state;
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id={name} name={name}
                               onChange={this.handleChange} value={data[name]} accept=".csv, .txt"/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                {data[name] && <div className="alert alert-info">{data[name]}</div>}
                {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
            </div>
        )
    }

}

export default Form;
