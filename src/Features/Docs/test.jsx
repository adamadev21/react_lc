import React, {Component} from 'react';
import {connect} from 'react-redux'
const mapStatetoProps =state=>{
    return {
        names: state.name
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addName: ()=> dispatch({type:'ADD'})
    }
}
const handleChange = (){
}
class Test extends Component {
constructor(props) {
    super(props);

}
    render() {
        return <div>
{this.props.names.map(name=>(
    <h2 key={new Date()}>{this.props.name}</h2>
))}
            
            <form onSubmit={this.props.addName}>
            <input onChange={this.handleChange} type="text" name="name" id="name"/>
            <button type='submit'>Submit</button>
            </form>
            
        </div>;
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Test);