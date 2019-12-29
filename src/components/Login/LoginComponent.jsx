import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import logIn from '../../redux/actions/authentication/auth';

import ubaLogo from '../../assets/images/uba-logo.svg';

// Components
import Footer from './Footer';
import SelectLanguage from './SelectLanguage';
import LoginForm from './LoginForm';

import './LoginComponent.scss';
import '../../assets/styles/_alive.scss';

export function LoginComponent(props) {
  const { errors, isLoading } = props;
  const history = useHistory();
  const handleSubmit = async values => {
    const data = {
      userNameOrEmailAddress: values.email,
      password: values.password,
      rememberClient: values.rememberClient,
    };
    return props.login(data, history);
  };

  return (
    <div className="__parentLogin __parent_bg_3 ">
      <div className="login_icon animated fadeIn">
        <img src={ubaLogo} alt="uba_signin_logo" />
      </div>
      <LoginForm
        errors={errors}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
      <SelectLanguage />
      <Footer />
    </div>
  );
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.objectOf(PropTypes.any).isRequired,
};
/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 *
 * @return {{errors: *}} this builder
 * @param state
 */
function mapStateToProps(state) {
  return {
    errors: state.errors,
    auth: state.auth,
    isLoading: state.toggleLoader,
  };
}
const mapDispatchToProps = {
  login: logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
