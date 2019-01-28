import { Storage } from 'aws-amplify';

export const s3Upload = async (file: any): Promise<string> => {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  }) as any;

  return stored.key;
}
