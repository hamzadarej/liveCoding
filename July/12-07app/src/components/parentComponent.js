    import { Fragment } from "react";
    import { connect } from "react-redux";
    import { changeName } from "../actions";
    import { Child } from "./child";
    const parent=(props)=>{
        const {store,changeName}=props;

        return <Fragment>
<button onClick={()=>changeName("hamza")}>click me</button>
<child store={store}/>
        </Fragment>
    }
    const mapStateToProps =(store)=>{
        return {store}
    }
    const mapDispatchToProps={changeName}
    export default connect(mapStateToProps,mapDispatchToProps)(parent);