const notes = [{
  title: 'My next trip',
  body: 'I want to go to spain'
},{
   title:'Habits to work on',
   body:'Exercise , eating a bit better'
},{
  title:'office modifications',
  body: 'get a new seat'
}];

const filters={
	searchText:''
};

//takes in the notes and renders those that pass the filters
const renderNotes=function(notes,filters){
	const filteredNotes=notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});
	document.querySelector('div#notes').innerHTML='';//after calculating things but before rendering things
	
	filteredNotes.forEach(function(notes){
		const notesEl=document.createElement('p');
		notesEl.textContent=notes.title;
		document.querySelector('div#notes').appendChild(notesEl);
	});//this was creating p tag for each filtered note
};

renderNotes(notes,filters);//to make sure sth comes up before the user interacts


document.querySelector('#create-note').addEventListener('click',function(e){
	e.target.textContent ='the button was clicked';
});

document.querySelector('#search-text').addEventListener('input',function(e){
	filters.searchText=e.target.value;
	renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
	console.log(e.target.value)
})