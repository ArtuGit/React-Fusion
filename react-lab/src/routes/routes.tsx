import React from 'react';
import BoxesPage from '../pages/BoxesPage';
import FormValidationPage from '../pages/FormValidationPage';
import ComponentInteractionsPage from '../pages/ComponentInteractionsPage';
import HomePage from "../pages/HomePage";
import { MainSection } from '../components/layout/MainSection/MainSection';

export const routes = [
  {
    path: '/',
    element: ({ name }: { name: string }) => (
      <MainSection title={name}>
        <HomePage />
      </MainSection>
    ),
    name: 'Home'
  },
  {
    path: '/boxes',
    element: ({ name }: { name: string }) => (
      <MainSection title={name}>
        <BoxesPage />
      </MainSection>
    ),
    name: '"Boxes" game'
  },
  {
    path: '/form-validation',
    element: ({ name }: { name: string }) => (
      <MainSection title={name}>
        <FormValidationPage />
      </MainSection>
    ),
    name: 'Form Validation'
  },
  {
    path: '/component-interactions',
    element: ({ name }: { name: string }) => (
      <MainSection title={name}>
        <ComponentInteractionsPage />
      </MainSection>
    ),
    name: 'Component Interactions'
  },
];