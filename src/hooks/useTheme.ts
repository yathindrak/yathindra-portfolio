import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const useTheme = () => useContext(ThemeContext);

export default useTheme;