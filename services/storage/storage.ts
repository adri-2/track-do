import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Sauvegarde une donnée.
 */
export async function save<T>(key: string, value: T): Promise<void> {
  try {
    const json = JSON.stringify(value);

    await AsyncStorage.setItem(key, json);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
    throw error;
  }
}

/**
 * Récupère une donnée.
 */
export async function get<T>(key: string): Promise<T | null> {
  try {
    const json = await AsyncStorage.getItem(key);

    if (!json) {
      return null;
    }

    return JSON.parse(json) as T;
  } catch (error) {
    console.error("Erreur lors de la lecture :", error);
    throw error;
  }
}

/**
 * Supprime une donnée.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    throw error;
  }
}
