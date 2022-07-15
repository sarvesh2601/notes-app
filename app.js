//UTILITYL: YARGS TO MAKE THE APP INTERACTIVE
//FILTER METHOD RETURS YOU THE ARRAY WHICH STAIESFIES THE CRITERIONS SET BY YOU
const yargs = require('yargs');
const fs = require('fs');
const notesUtility = require('./notes');
const notes = require('./notes');
//console.log(getNotes());
yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder:{
        TITLE:{
            describe: 'TITLE',
            demandOption: true,
            type: 'string'
        },
        BODY:{
            describe: 'BODY',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtility.ADD(argv.TITLE, argv.BODY);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a node',
    builder: {
        TITLE: {
            describe: 'Deletes node with the entered title',
            type: 'string',
            demandOption: true
        } 
    },
    handler(argv){
        notesUtility.REMOVE(argv.TITLE);
    }
})

yargs.command({
    command: 'List',
    describe: 'lists out all the notes',
    handler(){
        notesUtility.LIST();
    }
})

yargs.command({
    command: 'Read',
    describe: 'Reads a note',
    builder:{
        title:{
            describe:'Reading the given title',
            type: 'string',
            demandOption: 'true'
        }
    },
    handler(argv){
        notesUtility.READ(argv.title)
    }
})

yargs.parse();