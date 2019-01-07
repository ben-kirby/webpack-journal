import {Entry} from './journal';
import './styles.css';

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var entry = {
      title: document.getElementById('journal-title').value,
      body: document.getElementById('journal-body').value
    };

    const post = new Entry(entry);

    $('#display-entries').append(
      "<li>" + entry.title +
      "<p>" + entry.body + "</p>" +
      "<p>" + post.vowelsAndConsonants().vowelsCount + "</p>" +
      "<p>" + post.numOfWord().firstEight  + "</li></p>"
    );


  });
});
