import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ReservationPage from './pages/ReservationPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLayout from './pages/admin/AdminLayout';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MenuProvider>
          <CartProvider>
            <Router>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<div>Dashboard</div>} />
                  <Route path="menu" element={<div>Menu Management</div>} />
                  <Route path="users" element={<div>Users Management</div>} />
                  <Route path="reservations" element={<div>Reservations Management</div>} />
                  <Route path="orders" element={<div>Orders Management</div>} />
                  <Route path="delivery" element={<div>Delivery Management</div>} />
                  <Route path="settings" element={<div>Settings</div>} />
                </Route>

                {/* Client Routes */}
                <Route
                  path="/"
                  element={
                    <>
                      <Header />
                      <HomePage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/menu"
                  element={
                    <>
                      <Header />
                      <MenuPage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <>
                      <Header />
                      <CartPage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/reservation"
                  element={
                    <>
                      <Header />
                      <ReservationPage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <>
                      <Header />
                      <ProfilePage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <>
                      <Header />
                      <LoginPage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <>
                      <Header />
                      <RegisterPage />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <Header />
                      <NotFoundPage />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </Router>
          </CartProvider>
        </MenuProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;