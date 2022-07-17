
const fs = require('fs');
const chalk = require('chalk');

const getnotes = () => "Your Notes";

const addNote = (title, body) => {
    const notes = loadNotes();
    //const duplicate = notes.filter((note)=> note.TITLE === title)
    const duplicate = notes.find((note) => note.TITLE === title); // find return value of the element (first) which satisfies the criteria
    if(!duplicate){
        notes.push({
            TITLE: title,
            BODY: body
        })
        saveNotes(notes);
        console.log('Note added!');
    }else{
        console.log(`Notes with TITLE: ${title} already exits!`);
    }
}


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note) => note.TITLE != title)
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No Note found!'));
    }else{
        console.log(chalk.green.inverse('Note Removed!'));
    }
    saveNotes(notesToKeep);
}

const loadNotes = () =>{
try{
const bufferData = fs.readFileSync('notes.json');
const JSONdata = bufferData.toString();
return JSON.parse(JSONdata);

}catch(error){
    return [];
}

}

const ListNotes = () => {
    console.log(chalk.blue.bold('YOUR NOTES'));
    const notes = loadNotes();
    notes.forEach((note)=>{
        console.log(note.TITLE);
    })
}
debugger
const ReadNote = (title) =>{
    const notes = loadNotes();
    const YourNote = notes.find((note) => note.TITLE === title);
    if(YourNote == undefined){
        console.log(chalk.red.inverse('Note not found'))
    }else{
        console.log(chalk.bold.blue(YourNote.TITLE));
        console.log(chalk.cyan(YourNote.BODY));
    }
 
}
const saveNotes = (notes)=>{
    const JSONdata = JSON.stringify(notes);
    fs.writeFileSync('notes.json', JSONdata);
}

module.exports = {
    ADD: addNote,
    GET: getnotes,
    REMOVE: removeNote,
    LIST: ListNotes,
    READ: ReadNote
}
