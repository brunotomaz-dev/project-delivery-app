import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import renderWithRouter from '../helpers/renderWithRouter';
// import Login from '../../pages/login';
import {
  cart,
  cartStringfied,
  checkoutTableHeadersTitle,
  sellerResponseData,
  userStringfied,
} from '../helpers/constants';
import instance from '../../helpers/instance';
import getTotalPrice from '../../utils/getTotalPrice';

describe('Testando a página de Checkout', () => {
  const getAddressInput = () => screen.getByRole('textbox', { name: /Endereço/i });
  const getNumberInput = () => screen.getByRole('spinbutton', { name: /Número/i });
  const getSelectInput = () => screen.getByRole('combobox', { name: /P. Vendedora Responsável:/i });
  const getRemoveBtns = () => screen.getAllByRole('button', { name: /remover/i });
  const getOrderBtn = () => screen.getByRole('button', { name: /Finalizar Pedido/i });
  const getTotalPriceInfo = () => screen
    .getByTestId('customer_checkout__element-order-total-price');

  describe('Testando a existência do formulário de entrega e tabela de'
    + ' produtos que foram adicionados ao carrinho na página de produtos', () => {
    beforeEach(() => {
      instance.get.mockImplementationOnce(() => Promise.resolve(sellerResponseData));
      localStorage.getItem.mockRestore();
      localStorage.getItem.mockReturnValueOnce(cartStringfied);
      localStorage.getItem.mockReturnValueOnce(userStringfied);
      renderWithRouter(<App />, { initialEntries: ['/customer/checkout'] });
    });
    it('Deve existir um formulário de Entrega com input de texto para'
      + ' Endereço, um input de number para Número do Endereço e'
      + ' um botão de Finalizar Pedido desabilitado', async () => {
      expect(screen.getByRole('heading', { level: 2, name: /Detalhes e Endereço para Entrega/i }));
      expect(getAddressInput()).toBeInTheDocument();
      expect(getNumberInput()).toBeInTheDocument();
      expect(getSelectInput()).toBeInTheDocument();
      sellerResponseData.data.forEach(({ name }) => {
        expect(screen.getByRole('option', { name }));
      });
      expect(getOrderBtn()).toBeInTheDocument();
      expect(getOrderBtn()).toBeDisabled();
    });

    it('Deve existir uma tabela com o nome Finalizar Pedido'
      + ' , com dados sobre os produtos organizados em colunas'
      + ' juntamente com os preços e quantidades, e abaixo o preço total'
      + ' do carrinho', async () => {
      expect(screen.getByRole('heading', { level: 1, name: /Finalizar Pedido/i }));
      getRemoveBtns().forEach((removeBtn) => {
        expect(removeBtn).toBeInTheDocument();
        expect(removeBtn).not.toBeDisabled();
      });
      expect(getRemoveBtns()).toHaveLength(2);
      expect(getTotalPriceInfo()).toBeInTheDocument();
      expect(getTotalPriceInfo()).toHaveTextContent(getTotalPrice(cart));
      expect(getSelectInput()).toBeInTheDocument();
      expect(screen.getByRole('table')).toBeInTheDocument();
      checkoutTableHeadersTitle.forEach((title) => {
        expect(screen.getByRole('columnheader', { name: title })).toBeInTheDocument();
      });
      cart.forEach((product) => {
        expect(screen.getByRole('cell', { name: product.id })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: product.description }))
          .toBeInTheDocument();
        expect(screen.getByRole('cell', { name: product.quantity })).toBeInTheDocument();
        expect(screen.getByRole('cell', {
          name: `R$ ${product.price.replace('.', ',')}` })).toBeInTheDocument();
        expect(screen.getByRole('cell', {
          name: `R$ ${product.totalPrice.replace('.', ',')}` })).toBeInTheDocument();
      });
    });
  });

  beforeAll(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn();
  });

  beforeEach(() => {
    localStorage.getItem.mockReturnValueOnce(null);
  });

  afterAll(() => {
    jest.clearAllMocks();
    Storage.prototype.setItem.mockClear();
    Storage.prototype.getItem.mockClear();
  });
});
