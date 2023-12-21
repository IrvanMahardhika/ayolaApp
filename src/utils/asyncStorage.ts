import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemFromAsyncStorage = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
    }
  } catch (err) {
    console.log(err);
  }
  return '';
};

export const setItemInAsyncStorage = async ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const removeItemInAsyncStorage = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const clearAllItemInAsyncStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
