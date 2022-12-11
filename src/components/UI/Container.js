import classes from "./Container.module.css";

const Container = (props) => {
    return ( <div style={{backgroundColor: props.bg}} className={classes["container"]}>
        {props.children}
    </div> );
}
 
export default Container;