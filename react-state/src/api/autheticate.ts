export type User = {
  id: string;
  name: string;
};

export function autheticate(): Promise<User | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'bob' }), 1000));
}
