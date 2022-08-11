import { publish } from 'gh-pages';

publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/4shutosh/4shutosh.github.io.git', // Update to point to your repository
    user: {
      name: '4shutosh', // update to use your name
      email: '4shutoshsingh@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);