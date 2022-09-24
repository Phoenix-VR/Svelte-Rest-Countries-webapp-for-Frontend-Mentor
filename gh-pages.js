var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/Phoenix-VR/Svelte-Rest-Countries-webapp-for-Frontend-Mentor', // Update to point to your repository  
        user: {
            name: 'Phoenix-VR', // update to use your name
            email: 'anshyt7499@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)