import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = React.useState(false);

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return{
        ...prevNote,
        [name]: value
      };
      
    });
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  function expand(){
    setIsExpanded(true);
  }

  return (
    <div>
      <form className = "create-note">
        {isExpanded ? <input 
          onChange = {handleChange}
          name="title" 
          placeholder="Title" 
          value = {note.title}
        /> : null}
        
        <textarea 
          onClick = {expand}
          onChange = {handleChange}
          name="content" 
          placeholder="Take a note..." 
          rows= {isExpanded ? 3 : 1}
          value = {note.content}
        />
        <Zoom in ={isExpanded ? true : false}>
          <Fab onClick = {submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
