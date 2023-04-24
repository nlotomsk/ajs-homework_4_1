export default function healthIndicator(characterData) {
  if (characterData.health > 50) {
    return 'healthy';
  }
  if (characterData.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
