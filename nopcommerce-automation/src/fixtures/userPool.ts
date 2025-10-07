import users from '../../tests/data/users.json';

/* đúng thứ tự: worker 0 → user[0], worker 1 → user[1] */
export function pickUser(workerIndex: number) {
  return users[workerIndex];
}
