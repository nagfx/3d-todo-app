const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-white/10 backdrop-blur-lg p-4 fixed bottom-0 left-0 right-0'>
      <div className='max-w-7xl mx-auto text-center text-white/70'>
        <p>© {currentYear} 3D Todo List. Made with ❤️ by Naman</p>
      </div>
    </footer>
  );
};

export default Footer;

