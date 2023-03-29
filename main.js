// These variables store the projects and placeholder
let placeholder = document.getElementById('placeholder');
let project1 = document.getElementById('project1');
let project2 = document.getElementById('project2');
let project3 = document.getElementById('project3');
let project4 = document.getElementById('project4');
let project5 = document.getElementById('project5');

// These projects are hiding until the user chooses one, currently only placeholder is visible
project1.hidden = true;
project2.hidden = true;
project3.hidden = true;
project4.hidden = true;
project5.hidden = true;

// Hides all the other projects and placeholder when another is selected
function hideAll() {
    placeholder.hidden = true;
    project1.hidden = true;
    project2.hidden = true;
    project3.hidden = true;
    project4.hidden = true;
    project5.hidden = true;
}

// When a project is selected, hide placeholder and reveal that project's article
project1btn.onclick = function() {
    hideAll();
    project1.hidden = false;
};

project2btn.onclick = function() {
    hideAll();
    project2.hidden = false;
};

project3btn.onclick = function() {
    hideAll();
    project3.hidden = false;
};

project4btn.onclick = function() {
    hideAll();
    project4.hidden = false;
};

project5btn.onclick = function() {
    hideAll();
    project5.hidden = false;
};