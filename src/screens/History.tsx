import { ScreenHeader } from '@components/ScreenHeader';
import { Text, VStack } from 'native-base';

export function History() {
  return(
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios"/>
      <Text color="white">History</Text>
    </VStack>
  )
}