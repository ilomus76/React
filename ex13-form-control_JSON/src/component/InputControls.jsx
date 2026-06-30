export default function InputControls({
  gender,
  setGender,
  fruits,
  brand,
  setBrand,
  content,
  setContent,
  changeCheckbox,
  clickBtn,
}) {
  return (
    <div>
      <h4>INPUT CONTROLS</h4>

      {/* radio */}
      <label>
        <input
          type="radio"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        남성
      </label>

      <label>
        <input
          type="radio"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
        여성
      </label>

      {/* checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={fruits.includes("apple")}
            onChange={() => changeCheckbox("apple")}
          />
          사과
        </label>

        <label>
          <input
            type="checkbox"
            checked={fruits.includes("banana")}
            onChange={() => changeCheckbox("banana")}
          />
          바나나
        </label>

        <label>
          <input
            type="checkbox"
            checked={fruits.includes("orange")}
            onChange={() => changeCheckbox("orange")}
          />
          오렌지
        </label>
      </div>

      {/* select */}
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="현대">현대</option>
        <option value="기아">기아</option>
        <option value="KGM">KGM</option>
      </select>

      {/* textarea */}
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <button onClick={clickBtn}>값 확인</button>
    </div>
  );
}