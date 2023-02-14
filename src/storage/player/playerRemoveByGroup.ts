import AsyncStorage from '@react-native-async-storage/async-storage';

import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { PLAYER_COLLECTIONS } from '@storage/storageConfig';

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);
    const filtered = storage.filter((player) => player.name !== playerName);

    await AsyncStorage.setItem(`${PLAYER_COLLECTIONS}-${group}`, JSON.stringify(filtered));
  } catch (error) {
    throw error;
  }
}
