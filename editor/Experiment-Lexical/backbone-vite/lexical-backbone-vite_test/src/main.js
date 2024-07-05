// src/main.js
import $ from 'jquery';
import ToolbarView from './views/ToolbarView';
import LexicalEditor from './editor';

const toolbarButtons = [
  { label: 'Bold', command: 'bold' },
  { label: 'Italic', command: 'italic' },
  { label: 'Underline', command: 'underline' },
];

$(document).ready(() => {
  const toolbarView = new ToolbarView(toolbarButtons);
  const editorContainer = $('#editor-container')[0];
  const lexicalEditor = new LexicalEditor();
  lexicalEditor.init(editorContainer);

  toolbarView.on('command:execute', (command) => {
    console.log('Command to execute:', command);
    lexicalEditor.executeCommand(command);
  });

  $('#toolbar-container').html(toolbarView.el);
});
