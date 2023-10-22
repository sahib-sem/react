export async function deleteSong(id: number) {
  const response = await fetch(`http://localhost:5000/songs/${id} `, {
    method: 'DELETE',
  });

  if (response.ok) {
    return true;
  }
  return false;
}
