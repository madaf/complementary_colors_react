import React from 'react';


export class ColorComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }
   
    render() {
        return (
            <div className = "grid-item" onClick = {this.props.onClick}>
                <div className = "grid-cell--top" style = {{backgroundColor: this.props.color2}}>
                    <div className = "grid-cell--inner" style = {{backgroundColor: this.props.color1}}></div>
                </div>
                <div className = "grid-cell--bottom"><span style = {{color: this.props.color1}}>{this.props.color1.toUpperCase()}</span> + <span style = {{color: this.props.color2}}>{this.props.color2.toUpperCase()}</span></div>
            </div>
        );
    }
}