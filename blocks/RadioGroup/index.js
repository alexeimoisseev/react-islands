import React from 'react';

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.onCheck = this.onCheck.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            value: props.value
        });
    }

    render() {
        var onCheck = this.onCheck;
        var value = this.state.value;
        var children = React.Children.map(this.props.children, child => {
            var checked = child.props.value === value;
            return React.cloneElement(child, { checked, onCheck });
        });

        return (
            <span className={this.className()}>
                {children}
            </span>
        );
    }

    className() {
        var className = 'radio-group control-group';

        if (this.props.theme) {
            className += ' radio-group_theme_' + this.props.theme;
        }
        if (this.props.size) {
            className += ' radio-group_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' radio-group_type_' + this.props.type;
        }

        return className;
    }

    onCheck(value) {
        if (value !== this.state.value) {
            this.setState({value});
            this.props.onChange(value);
        }
    }

    getChildContext() {
        return {
            theme: this.props.theme,
            size: this.props.size,
            type: this.props.type,
            name: this.props.name,
            value: this.state.value
        };
    }
}

RadioGroup.defaultProps = {
    onChange() {}
};

RadioGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
};

RadioGroup.childContextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any
};

module.exports = RadioGroup;

