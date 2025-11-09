import PropTypes from 'prop-types';

const Age = ({ birthday }) => {
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return <span>{calculateAge(birthday)}</span>;
}

Age.propTypes = {
  birthday: PropTypes.string.isRequired,
}

export default Age;