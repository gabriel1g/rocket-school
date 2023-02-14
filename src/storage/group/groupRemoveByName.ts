import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupsGetAll } from '@storage/group/groupGetAll';
import { GROUP_COLLECTIONS, PLAYER_COLLECTIONS } from '@storage/storageConfig';

export async function groupRemoveByName(groupName: string) {
  try {
    const groups = await groupsGetAll();
    const filter = groups.filter((group) => group !== groupName);

    await AsyncStorage.setItem(GROUP_COLLECTIONS, JSON.stringify(filter));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTIONS}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
