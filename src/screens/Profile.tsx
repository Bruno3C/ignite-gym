import { Text, VStack } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';

export function Profile() {
  return(
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>
      <Text color="white">Profile</Text>
    </VStack>
  )
}