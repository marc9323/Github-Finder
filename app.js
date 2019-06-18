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
            } else {
                // show profile
                ui.showProfile(data.profile);
            }
        });
    } else {
        // Clear Profile
    }
});
