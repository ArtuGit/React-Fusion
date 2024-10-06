import BoxesPage from '../pages/BoxesPage';
import FormValidationPage from '../pages/FormValidationPage';
import ComponentInteractionsPage from '../pages/ComponentInteractionsPage';
import HomePage from "../pages/HomePage.tsx";

export const routes = [
  {
    path: '/',
    element: HomePage,
    name: 'Home'
  },
  {
    path: '/boxes',
    element: BoxesPage,
    name: 'Boxes'
  },
  {
    path: '/form-validation',
    element: FormValidationPage,
    name: 'Form validation'
  },
  {
    path: '/component-interactions',
    element: ComponentInteractionsPage,
    name: 'Component Interactions'
  },
];