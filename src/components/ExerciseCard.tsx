import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Heading, HStack, Icon, Image, Text, VStack } from "native-base";

export function ExerciseCard() {
  return(
    <TouchableOpacity>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image
          source={{ uri: 'https://blog.lionfitness.com.br/wp-content/uploads/2019/01/Blog-75-1.jpg'}}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon 
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
}