const skills = []; 

$('#addSkill').on('click', function(e) {
    const newSkill = $('#skills').val();
    skills.push(newSkill);
    render();
});

function render() {
    $('ul').empty()
    skills.forEach((skill, idx) => {
        $('ul').append(`<li id=${idx} ><button class="removeSkill">X</button> ${skill} </li>`)
    });
    $('.removeSkill').on('click', function(e) {
        const idx = e.target.id;
        skills.splice(idx, 1);
        render();
    });
};