import express from 'express';
import { Router } from "express";

const viewsRouter = Router();




// Configurar el enrutador para la vista en tiempo real
viewsRouter.get('/realtimeproducts', (req, res) => {
  res.render('realtimeproducts'); // Asegúrate de tener la vista "realTimeProducts.handlebars"
});

viewsRouter.get('/home', (req, res) => {
    res.render('home'); // Asegúrate de tener la vista "realTimeProducts.handlebars"
  });
  
viewsRouter.get('/chat', (req, res) => {
    res.render('chat'); // Renderiza la vista "chat.handlebars"
  });

  viewsRouter.get('/product-details', (req, res) =>{
    res.render('product-details');
});



viewsRouter.get('/cart-details', (req, res) =>{
  res.render('cart-details');
});

// Exportar el enrutador
export default viewsRouter;