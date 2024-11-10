const WelcomePage = ({ setCurrentPage }) => (
  <div className='text-center text-white'>
    <h1 className='text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>
      Welcome to 3D Todo
    </h1>
    <p className='text-xl mb-8 text-white/80'>
      A beautiful and interactive way to manage your tasks
    </p>
    <button
      onClick={() => setCurrentPage('todos')}
      className='px-8 py-4 bg-blue-500 rounded-lg text-white text-lg hover:bg-blue-600 transition-colors'
    >
      Get Started
    </button>
  </div>
);

export default WelcomePage;

