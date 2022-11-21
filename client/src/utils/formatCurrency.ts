import React from 'react';

export default function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(value);
}