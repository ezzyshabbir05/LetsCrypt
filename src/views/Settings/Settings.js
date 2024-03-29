import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Divider, Text } from 'react-native-paper';

import Box from '../../components/Box';
import Link from '../../components/Link';
import ListItem from '../../components/ListItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import { routeNames } from '../../router/routes';

export default function Settings({ cacheSize, onReadCacheSize, onClearCache, onNavigate }) {
  useFocusEffect(() => {
    onReadCacheSize();
  });

  return (
    <ScreenWrapper title="Settings">
      <Text variant="headlineSmall">LetsCrypt: Encrypt and share</Text>
      <Text>End-to-end encrypt text and files, and get raw result.</Text>
      <Spacer />
      <Text variant="bodyLarge">Open source, no tracking, free forever.</Text>

      <Spacer size={24} />
      <Divider />
      <Spacer size={24} />

      <ListItem space={24} onPress={() => onNavigate(routeNames.keypairs)}>
        Manage Keypairs
      </ListItem>
      <ListItem space={24} onPress={() => onNavigate(routeNames.keypairGenerator)}>
        Keypair Generator
      </ListItem>
      <ListItem space={24} onPress={() => onNavigate(routeNames.changeTheme)}>
        Change Theme
      </ListItem>
      <ListItem space={24}>
        <Box direction="row" align="center">
          <Text style={{ marginRight: 4 }}>Cache: {cacheSize}</Text>
          <Link onPress={onClearCache}>Clear</Link>
        </Box>
      </ListItem>

      <Divider />
      <Spacer size={24} />

      <ListItem space={24}>
        <Text>
          Contact:{' '}
          <Link
            onPress={() => {
              Linking.openURL('mailto:ezzyshabbir05@proton.me');
            }}
          >
            ezzyshabbir05@proton.me
          </Link>
        </Text>
      </ListItem>
      <ListItem space={24}>
        <Text>
          v{DeviceInfo.getVersion()}({DeviceInfo.getBuildNumber()})
        </Text>
      </ListItem>
    </ScreenWrapper>
  );
}
