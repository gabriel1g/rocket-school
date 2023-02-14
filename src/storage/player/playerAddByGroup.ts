import AsyncStorage from '@react-native-async-storage/async-storage';

import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { PLAYER_COLLECTIONS } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    if (storedPlayers.filter((player) => player.name === newPlayer.name).length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui');
    } else {
      const storage = JSON.stringify([...storedPlayers, newPlayer]);
      await AsyncStorage.setItem(`${PLAYER_COLLECTIONS}-${group}`, storage);
    }
  } catch (error) {
    throw error;
  }
}
