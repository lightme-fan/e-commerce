import { useEffect, useRef, useState } from 'react'

const useHooks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return { menuRef, isMenuOpen, setIsMenuOpen, handleOpenMenu, handleClickOutside }
}

export default useHooks
