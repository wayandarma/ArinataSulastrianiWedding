import { useState } from "react";

import axios from "axios";
export default function CommentForm({ fetchComment }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("attending");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      message,
      attendance,
    };
    setLoading(true);
    axios
      .post(
        "https://arinata-sulastriani-wedding-rlu2.vercel.app/api/comments",
        data
      )
      .then(() => {
        setLoading(false);
        setName("");
        setMessage("");
        setAttendance("attending");
        setShowModal(true);
        fetchComment();
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div className="container bg-tertiary py-16 mt-24">
      <div className="pb-12">
        <h1 className="font-meddons italic text-center font-light text-brown text-4xl">
          Kirimkan Pesan Kamu
        </h1>
        <p className="font-popins text-sm font-thin text-center ">
          Sampaikan Doa dan Restu Anda untuk Mempelai
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-bounce">
            <h1 className="font-popins text-2xl mb-4">
              Pesan Kamu Sudah Ter Post, trimaksih Pesannya.
            </h1>
            {/* You can add any additional content for the modal here */}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        method="post"
      >
        <div>
          <input
            type="text"
            placeholder="Masukan Nama Kamu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-b-2 border-brown w-full px-2 py-2"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            required
            cols="10"
            rows="5"
            placeholder="Pesan Kamu ?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-2 py-2 border-b-2 border-brown"
          ></textarea>
        </div>
        <div>
          <label htmlFor="attendance" className="font-light ">
            Kamu mau hadir ?
          </label>
          <select
            name="attendance"
            id="attendance"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="border-2 border-brown w-full px-2 py-2"
          >
            <option value="Hadir">Hadir</option>
            <option value="Berhalangan Hadir">Berhalangan Hadir</option>
          </select>
        </div>
        <button type="submit" className="bg-brown px-2 py-2 text-white">
          {loading ? "sedang mengirimkan pesan" : "kirim pesan kamu sekarang"}
        </button>
      </form>
    </div>
  );
}
