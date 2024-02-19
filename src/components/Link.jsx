import useNavigation from '../hooks/use-naigation';
import classnames from 'classnames';

function Link({ to, children, className, activeClassname }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    'text-blue-500',
    className,
    currentPath === to && activeClassname
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
