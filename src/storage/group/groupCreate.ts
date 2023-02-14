import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTIONS } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { groupsGetAll } from './groupGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    if (storedGroups.includes(newGroup)) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    } else {
      const storage = JSON.stringify([...storedGroups, newGroup]);
      await AsyncStorage.setItem(GROUP_COLLECTIONS, storage);
    }
  } catch (error) {
    throw error;
  }
}
