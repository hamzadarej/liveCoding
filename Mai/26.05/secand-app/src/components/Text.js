
function Text(){
    return (<div> hey , I an components</div>)
};
function Hallo(props){
    return (<div>hallo {props.userName} ,you are {props.age} welcome  to react </div>)
};
function Date(props){
    return (<div>Today is {props.year}.</div>)
}
export  {Text,Hallo,Date};
