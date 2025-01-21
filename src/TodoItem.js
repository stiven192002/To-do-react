function TodoItem(props) {
    return(
    <li className= "  TodoItem" >
      <span className=" Icon Icon-check Icon-check--active "> v </span>
      <p className="  TodoItem-p TodoItem-p--complete">
         {props.text } </p>
      <span className=" Icon Icon-delete">  x</span>
    </li>
    );
  }

  export{TodoItem};