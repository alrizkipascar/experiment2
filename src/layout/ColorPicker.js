export default function ColorPicker({ data }) {
  return (
    <div className="grid grid-rows-3 w-3/4 h-auto  ">
      <label for="favcolor">Select your favorite color:</label>
      <input type="color" id="favcolor" value="#ff0000"></input>
    </div>
  );
}
