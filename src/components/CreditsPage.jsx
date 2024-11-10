const CreditsPage = () => (
  <div className='text-white max-w-2xl mx-auto text-center'>
    <h2 className='text-4xl font-bold mb-6'>Credits</h2>
    <div className='bg-white/10 backdrop-blur-lg rounded-lg p-6'>
      <h3 className='text-2xl mb-4'>About the Developer</h3>
      <p className='mb-6'>
        Hi! I'm Naman, a passionate developer who loves creating beautiful and functional applications.
        This 3D Todo List was built using React and features modern design principles with a focus on user experience.
      </p>
      <div className='mb-6'>
        <h4 className='text-xl mb-2'>Technologies Used</h4>
        <ul className='space-y-2'>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Lucide Icons</li>
        </ul>
      </div>
      <p className='text-white/70'>Version 1.0.0</p>
    </div>
  </div>
);

export default CreditsPage;

