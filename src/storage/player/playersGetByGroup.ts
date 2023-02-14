import AsyncStorage from '@react-native-async-storage/async-storage';

import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { PLAYER_COLLECTIONS } from '@storage/storageConfig';

export async function playersGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTIONS}-${group}`);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
