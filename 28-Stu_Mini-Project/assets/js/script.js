// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
  projectDisplayEl.empty();

  // get projects from localStorage
  var projects = readProjectsFromStorage();

  // loop through each project and create a row
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i]; // get the current project

    // create a new row
    let projectRow = $('<tr>'); 
    

    // create a new column for the project name
    let projectNameTd = $('<td>').text(project.name); 
    projectRow.append(projectNameTd); 

    // create a new column for the project type
    let projectTypeTd = $('<td>').text(project.type);
    projectRow.append(projectTypeTd);

    // create a new column for the project date
    let projectDateTd = $('<td>').text(project.date);
    if (dayjs(project.date).isBefore(dayjs(), 'day')) {
        projectDateTd.css('background-color', 'red');
      } else if (dayjs(project.date).isSame(dayjs(), 'day')) {
        projectDateTd.css('background-color', 'yellow');
      } else { 
        projectDateTd.css('background-color', 'green');
      }
      
      projectRow.append(projectDateTd);
    // create a new column for the delete button
    let deleteBtnTd = $('<td>');
    let deleteBtn = $('<button>')
    .addClass('btn btn-danger btn-delete-project')
    .text('Delete') 
    .attr('data-index', i); 
    deleteBtnTd.append(deleteBtn);
    projectRow.append(deleteBtnTd);


    // append the row to the table
    projectDisplayEl.append(projectRow);

} 
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {
  var projectIndex = parseInt($(this).attr('data-index'));
  var projects = readProjectsFromStorage();
  // remove project from the array
  projects.splice(projectIndex, 1);
  saveProjectsToStorage(projects);

  // print projects
  printProjectData();
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // read user input from the form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format

  var newProject = {
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  saveProjectsToStorage(projects);

  // print project data
  printProjectData();

  // clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

projectFormEl.on('submit', handleProjectFormSubmit);

// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.
projectDisplayEl.on('click', '.btn-delete-project', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
