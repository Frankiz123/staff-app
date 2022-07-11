import React from 'react';

import { useDispatch } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'components/FormattedMessage';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { appleAuthAction } from 'containers/AuthHelper/slice/actions';

const AppleAuth = () => {
  const dispatch = useDispatch();

  const loginwithApple = async () => {
    // const appleAuthRequestResponse = {
    //   authorizationCode:
    //     'c9b331c8564354632b621ad38cd844368.0.rrqrr.HzdH1_g5XZ3Yf16j1YjaBA',
    //   authorizedScopes: [],
    //   email: null,
    //   fullName: {
    //     familyName: null,
    //     givenName: null,
    //     middleName: null,
    //     namePrefix: null,
    //     nameSuffix: null,
    //     nickname: null,
    //   },
    //   identityToken:
    //     'eyJraWQiOiJmaDZCczhDIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLmNsaW5pY1NvZnR3YXJlQ1JNU3RhZmYiLCJleHAiOjE2NTIzNTIxODUsImlhdCI6MTY1MjI2NTc4NSwic3ViIjoiMDAxMDExLjM4MGYwNWJkMGI1NzRmOWI5ZWI0YTVkYzhhOTgwZTBmLjE1MjIiLCJub25jZSI6IjQ0NTVkYjE3ZWRjODY1OTIzODgyMmQwNzE3YzZkZTg1OTBlMDFmZGUzZTBhNDI2YWY5NWZlZmY5ZWFhM2IzYjQiLCJjX2hhc2giOiJVclpRcFpwQWdXcWMtS21SZXVZNzRnIiwiZW1haWwiOiJhQDgtdS5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE2NTIyNjU3ODUsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.JP8tP5YLRebgQxP3ilfOKMniti4bG1dpiKwyQZVKndoByjjm-uA5U4Q_mBI4eTn8oYBD7Qf38OxfF6zrf9is_2Dhgh55f-KdzlHFnigudXB9zR0gQ2Zczr8HyrYzQyMacPhORVrHRtckHXeVSCOEADt4eJVA0tTMtNBMzloV3ZrDZbWPdAxj9yBjOgr-iYI7-i0n4ldmn9XOiqGtD2VyaQYvL2Dxitr4xElSqRJNDPU0RuueIu1JXSGA_Ux1UuMd04GPjBcWhwunQXZUF9g3ethM8JjmnKjK9zHN0JulOfPZAWXcVdS_N3fG6pJqwksZMpadoOcpozgqJt5KTpwgGA',
    //   nonce: 'nfBEhHbts0kldEb7-qBQuFh2ve6g6IyB',
    //   realUserStatus: 1,
    //   state: null,
    //   user: '001011.380f05bd0b574f9b9eb4a5dc8a980e0f.1522',
    // };

    // const data = {
    //   aud: 'com.clinicSoftwareCRMStaff',
    //   auth_time: 1652265785,
    //   c_hash: 'UrZQpZpAgWqc-KmReuY74g',
    //   email: 'a@8-u.com',
    //   email_verified: 'true',
    //   exp: 1652352185,
    //   iat: 1652265785,
    //   iss: 'https://appleid.apple.com',
    //   nonce: '4455db17edc8659238822d0717c6de8590e01fde3e0a426af95feff9eaa3b3b4',
    //   nonce_supported: true,
    //   sub: '001011.380f05bd0b574f9b9eb4a5dc8a980e0f.1522',
    // };

    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    console.log(appleAuthRequestResponse);
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      dispatch(
        appleAuthAction({
          appleToken: appleAuthRequestResponse.identityToken?.toString() || '',
          name: 'THERAPIST',
          surname: 'SURNAME',
          company_name: 'COMPANY NAME',
          phone: '+0123456789',
        }),
      );
    }
  };
  return (
    <>
      <FontAwesome5Brands.Button
        onPress={loginwithApple}
        name={'apple'}
        color={'black'}
        size={30}
        backgroundColor={'white'}
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <FormattedMessage style={{ paddingLeft: 8 }} {...messages.apple} />
      </FontAwesome5Brands.Button>
    </>
  );
};

export { AppleAuth };
