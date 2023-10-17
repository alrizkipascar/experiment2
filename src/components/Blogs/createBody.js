export default function createBody(body) {
  let text = "";
  if (body) {
    for (let i = 0; i < body.length; i++) {
      if (body[i]?.children[0]?.text == "") {
        text += " \n ";
      } else {
        text += body[i]?.children[0]?.text;
      }
    }
  }
  return text;
}
