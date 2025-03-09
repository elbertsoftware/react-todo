function TodoRowItem(props) {
  return (
    <tr onClick={() => props.deleteTodo(props.order)}>
      <th scope='row'>{props.order}</th>
      <td>{props.desc}</td>
      <td>{props.assigned}</td>
    </tr>
  );
}

export default TodoRowItem;