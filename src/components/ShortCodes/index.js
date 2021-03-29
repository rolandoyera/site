import React from 'react';
import Card from '../Card'
import Button from '../ButtonComponent'

export const ShortCodes = {
  Card: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  Button: ({ children, ...props }) => <Button {...props}>{children}</Button>,
}


