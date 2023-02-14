import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { groupsGetAll } from '@storage/group/groupGetAll';

import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchGroups() {
        try {
          setIsLoading(true);

          setGroups(await groupsGetAll());
        } catch (error) {
          console.log(error);
          Alert.alert('Turmas', 'Não foi possível carregar as turmas');
        } finally {
          setIsLoading(false);
        }
      }
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
          contentContainerStyle={groups.length == 0 && { flex: 0.5 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        type="PRIMARY"
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
