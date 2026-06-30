export default function MultiFileForm({
  nicknameRef,
  fileInputRef,
  imgUrls,
  changeFiles,
  submitData,
}) {
  return (
    <form onSubmit={submitData}>
      <h4>Multi File + Preview</h4>

      <input type="text" placeholder="닉네임" ref={nicknameRef} />

      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={changeFiles}
      />

      <p>이미지 수: {imgUrls.length}</p>

      <div>
        {imgUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            width="100"
            style={{ margin: 5 }}
          />
        ))}
      </div>

      <button type="submit">전송</button>
    </form>
  );
}