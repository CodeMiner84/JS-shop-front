import * as React from 'react';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';
import { toggleSignin } from '../../../actions';
import { SignIn } from '..';

type Props = {
  toggleSignin: (show: boolean) => void;
  toggleSignIn: boolean;
};

const SignInWrapper: React.SFC<Props> = ({
  toggleSignin: onClose,
  toggleSignIn: visible,
}) => (
  <div>
    <Drawer
      width={400}
      title="SignIn"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <SignIn />
    </Drawer>
  </div>
);

const mapStateToProps = ({ auth: { toggleSignIn } }: any) => ({
  toggleSignIn,
});

export default connect(
  mapStateToProps,
  { toggleSignin },
)(SignInWrapper);
