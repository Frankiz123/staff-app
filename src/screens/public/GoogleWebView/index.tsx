import React, { useState } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { selectGoogleLink } from 'containers/AuthHelper/slice/selectors';
import { useSelector } from 'react-redux';
import WebView from 'react-native-webview';
import { OauthGoogleLoginAction } from 'containers/AuthHelper/slice/actions';
import { useDispatch } from 'react-redux';
import useTheme from 'hooks/useTheme';

const GoogleWebView = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const GoogleLink = useSelector(selectGoogleLink);
  const [webViewLoading, setWebViewLoading] = useState<boolean>(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {webViewLoading && (
        <View
          style={{
            // flex: 1,
            left: (theme.dimensions.width - 25) / 2,
            top: 200,
            zIndex: 1000,
            position: 'absolute',
          }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      )}
      {GoogleLink?.link && (
        <WebView
          onLoadStart={() => setWebViewLoading(true)}
          onLoad={() => setWebViewLoading(false)}
          showsVerticalScrollIndicator={false}
          useWebKit
          allowsBackForwardNavigationGestures={false}
          sharedCookiesEnabled
          cacheEnabled={false}
          thirdPartyCookiesEnabled={true}
          onMessage={(event) => {
            let data = JSON.parse(event?.nativeEvent?.data || '{}');
            dispatch(OauthGoogleLoginAction(data));
          }}
          userAgent="Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 Mobile Safari/537.36"
          javaScriptEnabled
          source={{
            uri: GoogleLink.link,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default GoogleWebView;
