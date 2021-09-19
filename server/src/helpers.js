export function base64(obj) {
  return Buffer.from(JSON.stringify(obj)).toString("base64");
}
