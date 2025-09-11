const SkipLink = () => {
  return (
    <a 
      href="#main-content" 
      className="skip-to-content"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
          }
        }
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;