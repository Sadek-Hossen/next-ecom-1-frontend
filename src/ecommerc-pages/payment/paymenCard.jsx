'use client';
import { useState } from 'react';

export default function PaymentPage() {
  const [method, setMethod] = useState('card');
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!/^\d{16}$/.test(form.cardNumber))
      newErrors.cardNumber = 'Card number must be 16 digits';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry))
      newErrors.expiry = 'Invalid expiry (MM/YY)';
    if (!/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = 'Invalid CVV';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === 'card' && !validate()) return;
    alert(`Payment method: ${method}\nForm submitted successfully!`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 border">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Card */}
          <div
            className={`border rounded-lg p-4 ${
              method === 'card' ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={method === 'card'}
                onChange={() => setMethod('card')}
              />
              <span className="font-semibold">Card</span>
              <div className="flex gap-2 ml-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4" />
                <img src="https://www.ficci.org.bd/blog_images/tailored-solutions-for-car-owners-mastercard-and-zantrik-collaboration-1000x700.jpg" alt="Mastercard" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-4" />
              </div>
            </label>

            {method === 'card' && (
              <div className="mt-4 space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name on card"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    maxLength={16}
                    value={form.cardNumber}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={form.expiry}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.expiry && (
                      <p className="text-red-500 text-sm">{errors.expiry}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      maxLength={4}
                      value={form.cvv}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-sm">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* iDeal */}
          <div
            className={`border rounded-lg p-4 flex justify-between items-center cursor-pointer ${
              method === 'ideal' ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setMethod('ideal')}
          >
            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/IDEAL_Logo_2020.svg/1200px-IDEAL_Logo_2020.svg.png" alt="iDeal" className="h-5" />
              <span className="font-semibold">iDeal</span>
            </div>
            <input type="radio" checked={method === 'ideal'} readOnly />
          </div>

      

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
