'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);  // モーダル表示用のステート

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:5000/employee');
      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();
      const employee = data.employee.find((emp) =>
        emp.detail.some((d) => d.email === email && d.password === password)
      );

      if (employee) {
        setUser(employee.detail[0].name);
        setMessage('');
        setShowModal(true);  // 認証成功時にモーダルを表示
      } else {
        setUser(null);
        setMessage('データが一致しません');
        setShowModal(false);  // 認証失敗時にモーダルを非表示
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setMessage('データの取得に失敗しました');
      setShowModal(false);  // エラー時にモーダルを非表示
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="p-10 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password:</label>
          <input
            type="password"
            id="password"
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">ようこそ、{user}さん</h3>
            <p className="py-4">Weekly Reportへ進んでください。</p>
            <div className="modal-action">
            <Link href="/weekly" className="link link-neutral text-lg">Your Weekly Page</Link>
              <a href="#" className="btn" onClick={() => setShowModal(false)}>閉じる</a>
            </div>
          </div>
        </div>
      )}

      {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
    </div>
  );
}
