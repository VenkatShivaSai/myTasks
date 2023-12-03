import {TaskName, TagsCategory, ListItem} from './style'

const Tasks = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <listItem>
      <TaskName>{taskName}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </listItem>
  )
}

export default Tasks
