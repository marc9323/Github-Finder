const github = new Github();
const ui = new UI();

// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    // get input text
    const userText = e.target.value;

    if (userText != '') {
        // http call
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // user not found alert
                ui.showAlert('User not Found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
        ui.clearAlert();
    }
});
