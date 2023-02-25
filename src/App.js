import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import DataKelistrikan from './pages/DataKelistrikan';
import DataOperator from './pages/DataOperator';
import DataPelanggan from './pages/DataPelanggan';
import EditOperator from './pages/EditOperator';
import EditPelanggan from './pages/EditPelanggan';
import Login from './pages/Login';
import TambahOperator from './pages/TambahOperator';
import TambahPelanggan from './pages/TambahPelanggan';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/data-pelanggan" element={<DataPelanggan />}/>
        <Route path="/data-operator" element={<DataOperator />}/>
        <Route path="/tambah-pelanggan" element={<TambahPelanggan />}/>
        <Route path="/tambah-operator" element={<TambahOperator />}/>
        <Route path="/edit-pelanggan/:uuid" element={<EditPelanggan />}/>
        <Route path="/edit-operator/:uuid" element={<EditOperator />}/>
        <Route path="/data-listrik/:userId" element={<DataKelistrikan />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
