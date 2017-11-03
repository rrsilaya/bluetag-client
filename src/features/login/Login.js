import React from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import LoginForm from 'grommet/components/LoginForm';

const Login = handleSubmit => {
  return (
    <Article>
      <Section justify="center" align="center">
        <LoginForm
          onSubmit={handleSubmit}
          //logo={<s />}
          title="Blue Tag"
          usernameType="text"
        />
      </Section>
    </Article>
  );
};

export default Login;
