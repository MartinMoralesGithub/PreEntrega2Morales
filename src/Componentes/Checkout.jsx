import React, { useState } from 'react';

export const Checkout = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
    orderCode: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }
    // Aquí puedes generar el código de orden
    const orderCode = Math.floor(Math.random() * 1000000);
    setFormData({
      ...formData,
      orderCode: orderCode
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='justify-center py-28 mx-auto my-auto h-[128] p-12 rounded-lg text-center shadow-xl'>
      <form className='flex-row justify-start ' onSubmit={handleSubmit}>
        <label className='font-semibold text-lg'>Nombre:<input className='m-4 border-2 border-[#FF6C4D]' type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></label>
        <br />
        <label className='font-semibold text-lg'>Apellido:<input className='m-4 border-2 border-[#FF6C4D]' type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></label>
        <br />
        <label className='font-semibold text-lg'>Teléfono:<input className='m-4 border-2 border-[#FF6C4D]' type="text" name="phone" value={formData.phone} onChange={handleChange} /></label>
        <br />
        <label className='font-semibold text-lg'>E-mail:<input className='m-4 border-2 border-[#FF6C4D]' type="email" name="email" value={formData.email} onChange={handleChange} /></label>
        <br />
        <label className='font-semibold text-lg'>Confirmar E-mail:<input className='m-4 border-2 border-[#FF6C4D]' type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} /></label>
        <br />
        <button type="submit" className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-4 px-4 rounded mt-4 transition-colors duration-300 flex mx-auto justify-center items-center">Generar Código de Orden</button>
      </form>
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup">
            <button className="pt-4 close-btn" onClick={handleClosePopup}>X</button>
            <h1 className='font-semibold text-lg'>Compra Realizada!</h1>
            <h2>Código de Orden:</h2>
            <p>{formData.orderCode}</p>
          </div>
        </div>
      )}
    </div>
  );
};
