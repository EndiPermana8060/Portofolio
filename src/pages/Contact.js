import { useState } from 'react';
import '../styles/Contact.css'; // (Opsional untuk styling tambahan)

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Kirim data ke backend Flask pakai fetch/axios
    alert('Pesan berhasil dikirim! (ini simulasi)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5 contact-container">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Hubungi Saya</h1>
        <p className="text-muted">Silakan isi form berikut untuk menghubungi saya.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Pesan</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tuliskan pesan Anda..."
            required
          ></textarea>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4">Kirim</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
