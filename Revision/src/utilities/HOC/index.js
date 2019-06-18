import React, {Component} from 'react'
export default HigherOrderComponentObj = (RenderComponent) => {
    return class HigherOrderComponent extends Component {
        constructor(props) {
            super(props)
        }
        alertText = (text) => {
            alert(text)
        }

        render() {
            return  <RenderComponent onChangeText={(text) => this.alertText(text)}/>
        }
    }
}