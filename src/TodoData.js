import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
                    list : [
                                {
                                    id:1,
                                    text: 'My text1',
                                    completed: true
                                },
                                {
                                    id:2,
                                    text: 'My text2',
                                    completed: true
                                }
                            ]
                };
  }
  render() {
    const { text, completed } = this.state.list;
    console.log(this.state.list)
    console.log(text)
    return (
      <div style={styles.outerDiv}>
        <h1>My Daily Goals</h1>
        {console.log(text)}
        {completed? <input type="checkbox" checked/>: <input type="checkbox" checked/> }
        {this.text}
        {/* {List.forEach( (item) => {return {item}})} */}
        {/* {list.forEach((item) => {return ( item.text)})} */}
      </div>
    );
  }
}

export default TodoList;

const styles = {
  outerDiv: {
    borderStyle: "solid",
    borderColor: "cyan",
    height:250
  }
};
