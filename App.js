import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { CartProvider } from './src/context/CartContext';
import { OrdersProvider } from './src/context/OrdersContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 300); }, []);
  if (!ready) return <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}><ActivityIndicator size="large" color="#E63946" /></View>;
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrdersProvider>
          <CartProvider>
            <AppNavigator />
          </CartProvider>
        </OrdersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
