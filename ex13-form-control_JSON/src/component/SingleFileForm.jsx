export default function SingleFileForm({ changeFile, submitFile }) {
  return (
    <form onSubmit={submitFile}>
      <h4>Single File</h4>
      <input type="file" onChange={changeFile} />
      <button type="submit">UPLOAD</button>
    </form>
  );
}