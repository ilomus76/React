export default function GetForm({ title, setTitle, message, setMessage, submitGet }) {
  return (
    <form onSubmit={submitGet}>
      <h4>GET TEST</h4>

      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">GET</button>
    </form>
  );
}