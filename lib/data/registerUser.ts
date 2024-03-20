import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation RegisterUser($input: createUserInput) {
    createUser(input: $input) {
      user {
        id
      }
    }
  }
`;
