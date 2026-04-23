
export function removeDuplicates(playlist) {
  return Array.from(new Set(playlist))
}

export function hasTrack(playlist, track) {
  return new Set(playlist).has(track)
}

export function addTrack(playlist, track) {
  let set1=new Set(playlist)
  set1.add(track)
  return Array.from(set1)
}

export function deleteTrack(playlist, track) {
  playlist = new Set(playlist)
  playlist.delete(track)
  return Array.from(playlist)
  
}

export function listArtists(playlist) {
  return Array.from(new Set(playlist.map((track) => track.split(' - ').pop())))
}
