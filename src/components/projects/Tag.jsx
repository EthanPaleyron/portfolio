import PropTypes from 'prop-types';

const Tag = ({ children }) => {
  return <li className={"tag"}>{children}</li>;
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Tag;