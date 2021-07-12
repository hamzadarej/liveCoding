    import { Fragment } from "react";
    import { connect } from "react-redux";
    import { changeName } from "../actions";
    import  ChildComponent  from "./childComponent";
    const ParentComponent=(props)=>{
        const {store,changeName}=props;

        return <Fragment>
            {store.userName}
<          button onClick={()=>changeName("hamza")}>click me</button>
        <ChildComponent store={store}/>
        </Fragment>
    }
    const mapStateToProps =(store)=>{
        return {store}
    };
    const mapDispatchToProps={changeName};
    export default connect(mapStateToProps,mapDispatchToProps)(ParentComponent);