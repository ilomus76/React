import { useState, useRef } from "react";

export default function useHome() {
  // =========================
  // 1. GET
  // =========================
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitGet = (e) => {
    e.preventDefault();

    const url = `/backend/aaa.php?title=${title}&msg=${message}`;
    fetch(url)
      .then((res) => res.text())
      .then((text) => alert(text));
  };

  // =========================
  // 2. input control state
  // =========================
  const [gender, setGender] = useState("female");
  const [fruits, setFruits] = useState(["apple", "orange"]);
  const [brand, setBrand] = useState("기아");
  const [content, setContent] = useState("");

  const changeCheckbox = (value) => {
    if (fruits.includes(value)) {
      setFruits(fruits.filter((v) => v !== value));
    } else {
      setFruits([...fruits, value]);
    }
  };

  const clickBtn = () => {
    alert(`${gender}\n${fruits}\n${brand}\n${content}`);
  };

  const submitPOST = async () => {
    const data = {
      gender: gender || "",
      brand: brand || "",
      content: content || "",
      fruits: Array.isArray(fruits) ? fruits : [],
    };

    console.log("보내는 데이터:", data);
    try {
      const res = await fetch("/backend/bbb.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      console.log("서버응답:", json);
    } catch (err) {
      console.error("에러:", err);
    }
  };

  // =========================
  // 4. single file upload
  // =========================
  const [file, setFile] = useState(null);

  const submitFile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", file);

    fetch("/backend/ccc.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
        } else {
          alert("업로드 실패");
        }
      });
  };

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  // =========================
  // 5. multi file + preview + ref
  // =========================
  const nicknameRef = useRef();
  const fileInputRef = useRef();

  const [imgUrls, setImgUrls] = useState([]);

  const changeFiles = (e) => {
    const files = e.target.files;

    const urls = [];
    for (const file of files) {
      urls.push(URL.createObjectURL(file));
    }

    setImgUrls(urls);
  };

  const submitData = (e) => {
    e.preventDefault();

    const nickname = nicknameRef.current.value;
    const files = fileInputRef.current.files;

    const formData = new FormData();
    formData.append("nickname", nickname);

    for (const file of files) {
      formData.append("img[]", file);
    }

    fetch("/backend/ddd.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => alert(data))
      .catch((err) => alert(err.message));
  };

  return {
    // 1
    title,
    setTitle,
    message,
    setMessage,
    submitGet,

    // 2
    gender,
    setGender,
    fruits,
    brand,
    setBrand,
    content,
    setContent,
    changeCheckbox,
    clickBtn,

    // 3
    submitPOST,

    // 4
    file,
    submitFile,
    changeFile,

    // 5
    nicknameRef,
    fileInputRef,
    imgUrls,
    changeFiles,
    submitData,
  };
}