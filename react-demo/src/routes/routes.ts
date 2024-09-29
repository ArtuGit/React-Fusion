import BoxesPage from '../pages/BoxesPage';
import FormValidationPage from '../pages/FormValidationPage';
import ComponentInteractionsPage from '../pages/ComponentInteractionsPage';

export const routes = [
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
  // Add more routes here as needed
];