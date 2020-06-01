import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementHandler} />
                <CounterControl label="Decrement" clicked={this.props.onDecerementHandler}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubHandler}  />
                <hr/>
                <button onClick = {this.props.onStoreResHandler.bind(this,this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(storeResult => {
                        return <li key ={storeResult.id} onClick={this.props.onDelResHandler.bind(this,storeResult.id)}>{storeResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ctr: state.ctr.counter,
        storeResults : state.res.results
    };
}

const mapActionsToProps = (dispatch) => {
    return {
        onIncrementHandler : () => dispatch({type : actionTypes.INCREMENT}),
        onDecerementHandler  : () => dispatch({type : actionTypes.DECREMENT}),
        onAddHandler : () => dispatch({type : actionTypes.ADD, value : 5}),
        onSubHandler : () => dispatch({type: actionTypes.SUB,value :5}),
        onStoreResHandler : (result) => dispatch({type : actionTypes.STORE_RESULT, result : result}),
        onDelResHandler : (id) => dispatch({type : actionTypes.DELETE_RESULT, delEleId : id})
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Counter);